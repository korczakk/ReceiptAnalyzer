import { Component, OnInit } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { IReceipt } from '../../interfaces/ireceipt';
import { IProductCategory } from '../../interfaces/iproduct-category';

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

  get receiptData(): IReceipt {
    return this._receiptData ? this._receiptData : {} as IReceipt;
    console.log('GET');
  }

  public productCategories: IProductCategory;

  constructor(private receiptDataService: ReceiptDataService) { }

  ngOnInit() {
    this.receiptDataService.receiptData.subscribe(data => {
      this._receiptData = data;
    });

    this.receiptDataService.addItem({
      store: { storeName: "CCC" },
      shoppingDate: "2019-02-01",
      totalAmount: 10.02,
      items: [{
        productName: "prod1",
        productsQuantity: 1,
        productPrice: 10,
        productCategory: { categoryName: "kat1" }
      },
      {
        productName: "prod2",
        productsQuantity: 2,
        productPrice: 20,
        productCategory: { categoryName: "kat2" }
      }]

    });
  }

}
