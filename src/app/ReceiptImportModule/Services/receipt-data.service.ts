import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ReceiptProcessorService } from "./receipt-processor.service";
import { IReceipt } from '../interfaces/ireceipt';

@Injectable()
export class ReceiptDataService {
  constructor(private receiptProcessor: ReceiptProcessorService) { }

  private _receiptData: IReceipt = {} as IReceipt;

  private subject: BehaviorSubject<IReceipt> = new BehaviorSubject<IReceipt>(this._receiptData);
  public receiptData: Observable<IReceipt> = this.subject.asObservable();

  public addItem(item: IReceipt) {
  }

  public setShoppingDate(date: string) {
    let resultDate = this.receiptProcessor.convertToDateString(date);

    this._receiptData.shoppingDate = resultDate;
  }

  public setStoreName(name: string) { }

  public setTotalAmount(amount: string) { }

  public updateItem(item: IReceipt) { }
}
