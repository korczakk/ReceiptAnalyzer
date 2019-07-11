import { Component, OnInit } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { Receipt } from '../../interfaces/receipt';
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

}
