import { Component, OnInit } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { IReceipt } from '../../interfaces/ireceipt';

@Component({
  selector: "app-receipt-form",
  templateUrl: "./receipt-form.component.html",
  styleUrls: ["./receipt-form.component.css"]
})
export class ReceiptFormComponent implements OnInit {
  private _receiptData: IReceipt;

  set receiptData(val: IReceipt) {
    this._receiptData = val;
    this.receiptDataService.addItem(val);
    console.log('SET');
  }

  get receiptData() {
    return this._receiptData ? this._receiptData : {} as IReceipt;
    console.log('GET');
  }

  constructor(private receiptDataService: ReceiptDataService) {}

  ngOnInit() {
    this.receiptDataService.receiptData.subscribe(data => {
      this._receiptData = data;
    });

    this.receiptDataService.addItem({
      store: {storeName: "CCC"},
      shoppingDate: new Date("2019-01-01"),
      totalAmount: 1,
      items: [{
        productName: "prod1",
        productsQuantity: 1,
        productPrice: 10,
        productCategory: {categoryName: "kat1"}
      },
      {
        productName: "prod2",
        productsQuantity: 11,
        productPrice: 20,
        productCategory: {categoryName: "kat2"}
      }]

    });
  }
}
