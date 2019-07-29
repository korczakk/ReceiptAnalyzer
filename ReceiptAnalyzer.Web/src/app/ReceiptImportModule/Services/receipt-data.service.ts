import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";
import { Receipt } from "../interfaces/receipt";
import { ReceiptItem } from "../interfaces/receipt-item";
import { IStore } from "../interfaces/istore";

@Injectable()
export class ReceiptDataService {
  constructor() {}

  private _receiptData: Receipt = new Receipt();

  private subject: Subject<Receipt> = new Subject<Receipt>();
  public receiptData: Observable<Receipt> = this.subject.asObservable();

  addShoppingDate(resultDate: string) {
    this._receiptData.shoppingDate = resultDate;
    this.subject.next(this._receiptData);
  }

  addTotalAmount(total: number) {
    this._receiptData.totalAmount = total;
    this.subject.next(this._receiptData);
  }

  addNewProductItem(productName: string, quantity: string, price: string) {
    let item = new ReceiptItem();
    item.productName = productName;
    item.productPrice = Number.parseFloat(price);
    item.productsQuantity = Number.parseFloat(quantity);

    this._receiptData.items.push(item);
    this.subject.next(this._receiptData);
  }

  /**
   * Previous ReceiptItems collection will be replaced with a new one.
   * @param items 
   */
  addProductItems(items: ReceiptItem[]) {
    this._receiptData.items = items;
    this.subject.next(this._receiptData);
  }

  /**
   * Updates Receipt.items collection based on data provided in parameters. New ReceiptItem object is created using 
   * provided values and it is replaced with old ReceiptItem.
   * 
   * @param rowKey 
   * @param productName 
   * @param price 
   * @param quantity 
   */
  updateProductItem(
    rowKey: string,
    productName: string,
    price: string,
    quantity: string
  ) {
    let newItem: ReceiptItem = this._receiptData.items.find(
      item => item.rowKey == rowKey
    );
    let index = this._receiptData.items.findIndex(
      item => item.rowKey == rowKey
    );

    if (productName) newItem.productName = productName;

    if (price) newItem.productPrice = Number.parseFloat(price);

    if (quantity) newItem.productsQuantity = Number.parseFloat(quantity);

    this._receiptData.items[index] = newItem;
    this.subject.next(this._receiptData);
  }

  addStore(store: IStore) {
    this._receiptData.store = store;
    this.subject.next(this._receiptData);
  }

  clear() {
    this._receiptData.items = [];
    this._receiptData.shoppingDate = "";
    this._receiptData.store = undefined;
    this._receiptData.totalAmount = undefined;

    this.subject.next(this._receiptData);
  }

  removeReceiptItem(item: ReceiptItem) {
    this._receiptData.items = this._receiptData.items.filter(
      val => val.rowKey != item.rowKey
    );

    this.subject.next(this._receiptData);
  }


}
