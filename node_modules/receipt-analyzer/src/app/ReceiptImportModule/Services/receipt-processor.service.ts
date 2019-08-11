import { Injectable } from "@angular/core";
import { IOcrRecognitionResult } from "../interfaces/iocr-recognition-result";
import { IStore } from '../interfaces/istore';
import { ReceiptItem } from '../interfaces/receipt-item';
import { Observable, of } from 'rxjs';
import { DictionariesService } from './dictionaries.service';

@Injectable()
export class ReceiptProcessorService {
  constructor(private dictionariesService: DictionariesService) { }

  private dateFormats: RegExp[] = [
    /\d{4}-\d{2}-\d{2}/,
    /\d{2}-\d{2}-\d{4}/,
    /\d{2}.\d{2}.\d{4}/,
    /\d{4}.\d{2}.\d{2}/
  ];


  /**
   * Converts string with date to the correct format
   * @param date string with date to be converted
   */
  public getShoppingDate(date: string): string {
    let isIncorrectOrder = /^\d{2,2}[-|.]/;
    let dateString: string;

    this.dateFormats.map(exp => {
      let result = exp.exec(date)

      if (result) {
        result[0] = result[0].replace(/\./g, '-');

        if (isIncorrectOrder.test(result[0])) {
          let parts = result[0].split('-');

          dateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
        else {
          dateString = result[0];
        }
      }
    });

    return dateString;
  }

  /**
   * Pulls total amount from a string.
   * @param text Text being converted to receipt amount.
   */
  public getTotalAmount(text: string) {
    let amountOnly: RegExp = /\d{1,3}\s?([,|\.]\s?\d{2})?/;

    let result = amountOnly.exec(text);

    let amountString;
    if (result && result[0]) {
      amountString = result[0].replace(/\s/g, '').replace(',', '.');
    }

    return amountString;
  }

  /**
   * Gets quantity from a string based on regular expresion
   * @param text String to convert to a product's quantity
   */
  public getQuantity(text: string): string {
    if (this.checkIfStringContainsQuantityAndPrice(text) == -1)
      return;

    let quantityExp: RegExp = /\d{1,3}\s?([,|.]\s?\d{1,3})?(szt|szt.|op|op.)?\s?[x|*]/;
    let result = quantityExp.exec(text);

    return result[0]
    .replace(/\s/g, '')
    .replace(/(szt.|szt|op.|op)/g, '')
    .replace(/,/g, '.')
    .replace(/[x|*]/g, '')
    .trim();
  }

  /**
   * Gets product's price from string
   * @param text String to convert to a product price
   */
  public getProductPrice(text) {
    if (this.checkIfStringContainsQuantityAndPrice(text) == -1)
      return;

    let priceExpression: RegExp = /\s?[x|*]\s?\d+\s?[,|\.]\s?\d{2}/;

    let result = priceExpression.exec(text);

    return result[0].replace(/\s/g, '').replace(/x|\*/g, '').replace(',', '.');
  }


  public getProductName(text: string): string {
    //is contains quantity and price - if yes then take the part from the left
    let index = this.checkIfStringContainsQuantityAndPrice(text);

    if (index > -1) {
      return text.substr(0, index).trim();
    }
    else {
      if (text.length > 4 && this.howManyNumbersInString(text) / text.length < 0.5)
        return text.trim();
    }
  }

  public retriveShoppingDate(recognizedText: IOcrRecognitionResult): Observable<string> {
    let date: string;

    for (let i: number = 0; recognizedText.lines.length > i; i++) {
      date = this.getShoppingDate(recognizedText.lines[i].text);

      if (date)
        break;
    }

    return of<string>(date);
  }

  public retriveStoreName(recognizedText: IOcrRecognitionResult): Observable<IStore> {
    let markOfSectionEnding: RegExp = /\s?paragon fiskalny\s?/gi;
    let store: IStore;

    this.dictionariesService.getStores().subscribe(stores => {

      for (let i: number = 0; recognizedText.lines.length; i++) {

        store = stores.find(x => x.storeName == recognizedText.lines[i].text.trim());

        if (store || markOfSectionEnding.test(recognizedText.lines[i].text))
          break;
      }
    });

    return of<IStore>(store);
  }

  public retriveTotalAmount(recognizedText: IOcrRecognitionResult): Observable<number> {
    let totalAmount: number;
    let totalAmountPattern: RegExp = /suma pln/gi;

    let index = recognizedText.lines.findIndex(itm =>{ return totalAmountPattern.test(itm.text)});

    if (index > -1) {
      totalAmount = this.getTotalAmount(recognizedText.lines[index].text);
    }

    if (!totalAmount) {
      totalAmount = this.getTotalAmount(recognizedText.lines[index + 1].text);
    }

    return of<number>(totalAmount);
  }

  public retriveProductsDetails(recognizedText: IOcrRecognitionResult): Observable<ReceiptItem[]> {
    let startIndex = recognizedText.lines.findIndex(x => x.text.toLowerCase().indexOf('paragon fiskalny') > -1);
    let endIndex = recognizedText.lines.findIndex(x => x.text.toLowerCase().indexOf('suma pln') > -1);

    let items: ReceiptItem[] = [];

    for (let i: number = startIndex + 1; i < endIndex - 2; i++) {
      let name = this.getProductName(recognizedText.lines[i].text);
      let price: number = Number.parseFloat(this.getProductPrice(recognizedText.lines[i].text));
      let quantity: number = Number.parseFloat(this.getQuantity(recognizedText.lines[i].text));

      if (name && price && quantity) {
        let item = new ReceiptItem();
        item.productName = name;
        item.productPrice = price;
        item.productsQuantity = quantity;

        items.push(item);
      }
    }

    return of<ReceiptItem[]>(items);
  }

  private checkIfStringContainsQuantityAndPrice(text: string): number {
    if (!text)
      return -1;

    let quantityAndPriceExpression: RegExp[] = [
       /\d{1,3}\s?[,|.]\s?\d{1,3}\s?[x|*]\s?\d+\s?[,|\.]\s?\d{2}/,
       /\d{1,3}\s?[x|*]\s?\d+\s?[,|\.]\s?\d{2}/,
       /\d{1,3}\s?(szt|szt.|op|op.)\s?[x|*]\s?\d+\s?[,|\.]\s?\d{2}/
      ]
    
    for(let i: number = 0; i < quantityAndPriceExpression.length; i++) {
      let result = text.search(quantityAndPriceExpression[i]);

      if(result > -1)
        return result;
    }
    
    return -1;
  }

  private howManyNumbersInString(text: string): number {
    let numbersInTExt = /\d/g.exec(text);

    return numbersInTExt ? numbersInTExt.length : 0;
  }
}
