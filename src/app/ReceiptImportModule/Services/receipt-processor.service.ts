import { Injectable } from "@angular/core";
import { IOcrRecognitionResult } from "../interfaces/iocr-recognition-result";
import { NumberFormatStyle } from '@angular/common';

@Injectable()
export class ReceiptProcessorService {
  constructor() { }

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
    let amountOnly: RegExp = /\d+\s?[,|\.]\s?\d{2}/;

    let result = amountOnly.exec(text);

    let amountString;
    if (result[0]) {
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

    let quantityExp: RegExp = /\d{1,3}\s?[,|.]\s?\d{1,3}\s?[x|*]/;
    let result = quantityExp.exec(text);

    return result[0].replace(/\s/g, '').replace(/,/g, '.').replace(/[x|*]/g, '').trim();
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
      if(text.length > 4 && this.howManyNumbersInString(text) / text.length < 0.5)
        return text.trim();
    }
  }

  public retriveShoppingDate(recognizedText: IOcrRecognitionResult) { }

  public retriveStoreName(recognizedText: IOcrRecognitionResult) { }

  public retriveTotalAmount(recognizedText: IOcrRecognitionResult) { }

  public retriveProductsDetails(receiptText: IOcrRecognitionResult) {
    //wyciąga wszystkie produkty
  }

  private removeWhiteSpaces(text: string) { }

  private checkIfStringContainsQuantityAndPrice(text: string): number {
    if(!text)
      return -1;
    
    let quantityAndPriceExpression: RegExp = /\d{1,3}\s?[,|.]\s?\d{1,3}\s?[x|*]\s?\d+\s?[,|\.]\s?\d{2}/;

    return text.search(quantityAndPriceExpression);
  }

  private howManyNumbersInString(text: string): number {
    let numbersInTExt =  /\d/g.exec(text);

    return numbersInTExt ? numbersInTExt.length : 0;
  }
}
