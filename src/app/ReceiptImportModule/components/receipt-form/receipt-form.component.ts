import { Component, OnInit } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { IReceipt } from '../../interfaces/ireceipt';
import { IProductCategory } from '../../interfaces/iproduct-category';
import { DictionariesService } from '../../Services/dictionaries.service';
import { IStore } from '../../interfaces/istore';
import { Observable } from 'rxjs';

@Component({
  selector: "app-receipt-form",
  templateUrl: "./receipt-form.component.html",
  styleUrls: ["./receipt-form.component.css"]
})
export class ReceiptFormComponent implements OnInit {
  private _receiptData: IReceipt;

  set receiptData(val: IReceipt) {
   //this._receiptData = val; --chyba zbędne
    this.receiptDataService.addItem(val);
    console.log('SET');
  }

  get receiptData(): IReceipt {
    
    console.log('GET');
    return this._receiptData;

  }

  public productCategories: IProductCategory[];
  public stores: IStore[];

  constructor(
    private receiptDataService: ReceiptDataService,
    private dictionariesService: DictionariesService) {}

  ngOnInit() {
    this.dictionariesService.getProductCategories().subscribe(
      data => {
        this.productCategories = data;
      }
    )

    this.receiptDataService.receiptData.subscribe(data => {
      this._receiptData = data;
    });

    // this.receiptDataService.addItem({
    //   store: { StoreName: "CCC" },
    //   shoppingDate: "2019-02-01",
    //   totalAmount: 10.02,
    //   items: [{
    //     productName: "prod1",
    //     productsQuantity: 1,
    //     productPrice: 10,
    //     productCategory: { CategoryName: "Leki" }
    //   },
    //   {
    //     productName: "prod2",
    //     productsQuantity: 2,
    //     productPrice: 20,
    //     productCategory: { CategoryName: "Ubrania" }
    //   }]

    // });

    // this.dictionariesService.getStores().subscribe(
    //   data => {
    //     this.stores = data;
    //   }
    // )

  }

}
