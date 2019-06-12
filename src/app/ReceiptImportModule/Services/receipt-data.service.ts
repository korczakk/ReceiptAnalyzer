import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ReceiptProcessorService } from "./receipt-processor.service";

@Injectable()
export class ReceiptDataService {
  constructor(private receiptProcessor: ReceiptProcessorService) {}

  private subject: BehaviorSubject<string> = new BehaviorSubject("");
  public receiptData: Observable<string> = this.subject.asObservable();

  public addItem(item: string) {
    this.subject.next(item);
  }

  public setReceiptDate(date: string) {}

  public setStoreName(name: string) {}

  public setTotalAmount(amount: string) {}

  public updateItem(item: string) {}
}
