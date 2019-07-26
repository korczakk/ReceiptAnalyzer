import { Component, OnInit, Input } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { Receipt } from '../../interfaces/receipt';
import { IProductCategory } from '../../interfaces/iproduct-category';
import { DictionariesService } from '../../Services/dictionaries.service';
import { IStore } from '../../interfaces/istore';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ReceiptFormUpdatingProgress } from '../../interfaces/ReceiptFormUpdatingProgress';


@Component({
  selector: "app-receipt-form",
  templateUrl: "./receipt-form.component.html",
  styleUrls: ["./receipt-form.component.css"]
})
export class ReceiptFormComponent implements OnInit {
  @Input() formUpdatingProgress: ReceiptFormUpdatingProgress;

  public productCategories: IProductCategory[];
  public stores: IStore[];

  public receiptForm: FormGroup;
  public itemsForm: FormArray;

  constructor(
    private receiptDataService: ReceiptDataService,
    private dictionariesService: DictionariesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.receiptForm = this.fb.group({
      store: [''],
      shoppingDate: [null, Validators.required],
      totalAmount: [],
      items: this.fb.array([])
    });

    this.itemsForm = this.receiptForm.get("items") as FormArray;

    this.dictionariesService.getProductCategories().subscribe(data => {
      this.productCategories = data;
    });

    this.receiptDataService.receiptData.subscribe(data => {
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
      let item: FormGroup = this.fb.group({
        productName: [],
        productsQuantity: [],
        productPrice: [],
        productCategory: [],
        rowKey: []
      })

      this.itemsForm.push(item);
    }
  }

  populateReceiptForm(data: Receipt) {
    this.receiptForm.patchValue(data);
  }

  removeReceiptItem(item: FormGroup) {
    this.receiptDataService.removeReceiptItem(item.value);
  }

  saveReceiptFormData() { 
    console.log(this.receiptForm.value); 
  }

  inputChanged() {
    this.receiptDataService.addProductItems(this.itemsForm.value);
  }
}
