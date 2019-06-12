import { Component, OnInit } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";

@Component({
  selector: "app-receipt-form",
  templateUrl: "./receipt-form.component.html",
  styleUrls: ["./receipt-form.component.css"]
})
export class ReceiptFormComponent implements OnInit {
  private _receiptData: string;

  set receiptData(val: string) {
    this._receiptData = val;
    this.receiptDataService.addItem(val);
    console.log('SET');
  }

  get receiptData() {
    return this._receiptData;
    console.log('GET');
  }

  constructor(private receiptDataService: ReceiptDataService) {}

  ngOnInit() {
    this.receiptDataService.receiptData.subscribe(data => {
      this._receiptData = data;
    });
  }

  public onBlur($event) {
   // this.receiptDataService.addItem('kamil');
  }
}
