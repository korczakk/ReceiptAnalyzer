import { Component, OnInit, Input } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { Receipt } from '../../interfaces/receipt';
import { IProductCategory } from '../../interfaces/iproduct-category';
import { DictionariesService } from '../../Services/dictionaries.service';
import { IStore } from '../../interfaces/istore';
import { Observable } from 'rxjs';
import { ReceiptItem } from '../../interfaces/receipt-item';

@Component({
  selector: "app-receipt-form",
  templateUrl: "./receipt-form.component.html",
  styleUrls: ["./receipt-form.component.css"]
})
export class ReceiptFormComponent implements OnInit {

  @Input() showWaiting: boolean = false;

  public receiptData: Receipt;

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
      this.receiptData = data;
    });

    this.dictionariesService.getStores().subscribe(
      data => {
        this.stores = data;
      }
    );
  }

  categoryComparer(a: any, b: any): boolean {
    return a && b ? a.CategoryName == b.CategoryName : false;
  }

  storesComparer(a: IStore, b: IStore) : boolean {
    return a && b ? a.StoreName == b.StoreName : false;
  }

  removeReceiptItem(item: ReceiptItem) {
    console.log(item.rowKey);
    this.receiptData.items = this.receiptData.items.filter(val => val.rowKey != item.rowKey);
  }

}
