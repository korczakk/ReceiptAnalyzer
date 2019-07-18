import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Receipt } from '../interfaces/receipt';
import { ReceiptItem } from '../interfaces/receipt-item';
import { IStore } from '../interfaces/istore';

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
    item.productName = productName;
    item.productPrice = Number.parseFloat(price);
    item.productsQuantity = Number.parseFloat(quantity);

    this._receiptData.items.push(item);
  }

  addProductItems(items: ReceiptItem[]) {
    this._receiptData.items = items;    
  }

  updateProductItem(rowKey: string, productName: string, price: string, quantity: string) {
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

  addStore(store: IStore) {
    this._receiptData.store = store;
  }

  clear() {
    this._receiptData.items = [];
    this._receiptData.shoppingDate = '';
    this._receiptData.store = undefined;
    this._receiptData.totalAmount = undefined;
  }
}
