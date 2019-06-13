import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ReceiptProcessorService } from "./receipt-processor.service";
import { IReceipt } from '../interfaces/ireceipt';

@Injectable()
export class ReceiptDataService {
  constructor(private receiptProcessor: ReceiptProcessorService) {}

  private subject: Subject<IReceipt> = new Subject<IReceipt>();
  public receiptData: Observable<IReceipt> = this.subject.asObservable();
  
  public addItem(item: IReceipt) {
    this.subject.next(item);
  }

  public setReceiptDate(date: string) {}

  public setStoreName(name: string) {}

  public setTotalAmount(amount: string) {}

  public updateItem(item: IReceipt) {}
}
