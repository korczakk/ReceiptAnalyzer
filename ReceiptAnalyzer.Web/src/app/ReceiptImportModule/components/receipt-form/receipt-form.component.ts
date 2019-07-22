import { Component, OnInit, Input } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { Receipt } from '../../interfaces/receipt';
import { IProductCategory } from '../../interfaces/iproduct-category';
import { DictionariesService } from '../../Services/dictionaries.service';
import { IStore } from '../../interfaces/istore';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: "app-receipt-form",
  templateUrl: "./receipt-form.component.html",
  styleUrls: ["./receipt-form.component.css"]
})
export class ReceiptFormComponent implements OnInit {
  @Input() showWaiting: boolean = false;

  public receiptData: Receipt;    //DO USUNIĘCIA
  public productCategories: IProductCategory[];
  public stores: IStore[];

  public receiptForm: FormGroup;
  public itemsForm: FormArray;

  constructor(
    private receiptDataService: ReceiptDataService,
    private dictionariesService: DictionariesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.receiptForm = this.fb.group({
      store: [],
      shoppingDate: [],
      totalAmount: [],
      items: this.fb.array([])
    });

    this.itemsForm = this.receiptForm.get("items") as FormArray;

    this.dictionariesService.getProductCategories().subscribe(data => {
      this.productCategories = data;
    });

    this.receiptDataService.receiptData.subscribe(data => {
      this.receiptData = data;
      this.createReceiptItem(data.items.length);
      this.populateReceiptForm(data);
    });

    this.dictionariesService.getStores().subscribe(data => {
      this.stores = data;
    });
  }

  createReceiptItem(numberOfItems: number) {
    this.itemsForm.controls.splice(0);

    for (let i = 0; i < numberOfItems; i++) {
      this.itemsForm.controls.push(
        this.fb.group({
          productName: [],
          productsQuantity: [],
          productPrice: [],
          productCategory: [],
          rowKey: []
        })
      );
    }
  }

  populateReceiptForm(data: Receipt) {
    this.receiptForm.patchValue(data);
  }

  // categoryComparer(a: any, b: any): boolean {
  //   return a && b ? a.CategoryName == b.CategoryName : false;
  // }

  removeReceiptItem(item: FormGroup) {
    this.receiptDataService.removeReceiptItem(item.value);
  }

  saveReceiptFormData() {}
}
