import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ReceiptProcessorService } from "./receipt-processor.service";
import { Receipt } from '../interfaces/receipt';
import { ReceiptItem } from '../interfaces/receipt-item';

@Injectable()
export class ReceiptDataService {
  constructor() { }

  private _receiptData: Receipt = new Receipt();

  private subject: BehaviorSubject<Receipt> = new BehaviorSubject<Receipt>(this._receiptData);
  public receiptData: Observable<Receipt> = this.subject.asObservable();

  addShoppingDate(resultDate: string) {
    this._receiptData.shoppingDate = resultDate; 
  }

  addTotalAmount(total: number) {
    this._receiptData.totalAmount = total;
  }

  addNewProductItem(productName: string, quantity: string, price: string) {
    let item = new ReceiptItem();
    item.rowKey = this._receiptData.items.length + 1;
    item.productName = productName;
    item.productPrice = Number.parseFloat(price);
    item.productsQuantity = Number.parseFloat(quantity);

    this._receiptData.items.push(item);
  }

  updateProductItem(rowKey: number, productName: string, price: string, quantity: string) {
    let newItem: ReceiptItem = this._receiptData.items.find(item => item.rowKey == rowKey);  
    let index = this._receiptData.items.findIndex(item => item.rowKey == rowKey);  

    if(productName)
      newItem.productName = productName;
    
    if(price)
      newItem.productPrice = Number.parseFloat(price);  

    if(quantity)
      newItem.productsQuantity = Number.parseFloat(quantity);

    this._receiptData.items[index] = newItem;
  }
}
