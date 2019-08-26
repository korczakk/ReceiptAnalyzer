import { Component, OnInit, Input } from "@angular/core";
import { ReceiptDataService } from "../../Services/receipt-data.service";
import { Receipt } from '../../interfaces/receipt';
import { IProductCategory } from '../../interfaces/iproduct-category';
import { DictionariesService } from '../../Services/dictionaries.service';
import { IStore } from '../../interfaces/istore';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ReceiptFormUpdatingProgress } from '../../interfaces/ReceiptFormUpdatingProgress';
import { ReceiptItem } from '../../interfaces/receipt-item';
import { ReceiptStorageService } from '../../Services/receipt-storage.service';
import { SpellcheckModel } from '../../interfaces/spellcheck-model';
import { SpellingFlaggedToken } from '../../interfaces/spelling-flagged-token';

@Component({
  selector: "app-receipt-form",
  templateUrl: "./receipt-form.component.html",
  styleUrls: ["./receipt-form.component.css"]
})
export class ReceiptFormComponent implements OnInit {
  @Input() formUpdatingProgress: ReceiptFormUpdatingProgress;
  @Input() spellCheckSuggestions: SpellcheckModel[];

  public productCategories: IProductCategory[];
  public stores: IStore[];

  public receiptForm: FormGroup;
  public itemsForm: FormArray;

  constructor(
    private receiptDataService: ReceiptDataService,
    private dictionariesService: DictionariesService,
    private fb: FormBuilder,
    private receiptStorageService: ReceiptStorageService
  ) { }

  ngOnInit() {
    this.receiptForm = this.fb.group({
      store: ['', Validators.required],
      shoppingDate: [null, Validators.required],
      totalAmount: ['', [Validators.required, Validators.min(0.01)]],
      //items: this.fb.array([this.buildReceiptItem()], Validators.required)
      items: this.fb.array([], Validators.required)
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
      let item: FormGroup = this.buildReceiptItem();

      this.itemsForm.push(item);
    }
  }

  buildReceiptItem(): FormGroup {
    return this.fb.group({
      productName: ['', Validators.required],
      productsQuantity: ['', [Validators.required, Validators.min(0.01)]],
      productPrice: ['', [Validators.required, Validators.min(0.01)]],
      productCategory: ['', Validators.required],
      rowKey: []
    });
  }

  populateReceiptForm(data: Receipt) {
    this.receiptForm.patchValue(data);

    this.receiptForm.markAsTouched();
    this.itemsForm.markAsTouched();
  }

  removeReceiptItem(item: FormGroup) {
    this.receiptDataService.removeReceiptItem(item.value);
  }

  saveReceiptFormData() {
    this.receiptStorageService.addNewReceipt(this.receiptForm.value).subscribe(
      result => {
        this.receiptDataService.clear();
        this.receiptForm.reset();
        alert('Saved!');
      },
      error => {
        console.log(error);
        alert('Error. Not saved!');
      }
    );
  }

  itemsInputChanged() {
    this.receiptDataService.addProductItems(this.itemsForm.value);
  }

  shoppingDateChanged() {
    this.receiptDataService.addShoppingDate(this.receiptForm.get('shoppingDate').value);
  }

  storeInputChanged() {
    this.receiptDataService.addStore(this.receiptForm.get('store').value);
  }

  totalAmouontInputChanged() {
    this.receiptDataService.addTotalAmount(this.receiptForm.get('totalAmount').value);
  }

  addReceiptItem() {
    this.itemsForm.push(this.buildReceiptItem());
  }

  checkIfSpellingCorrectionExists(rowKey: FormControl): boolean {
    return this.spellCheckSuggestions.find(x => x.rowKey === rowKey.get("rowKey").value).spellingFlaggedToken.length > 0;
  }

  getSpellingCheckResult(rowKey: FormControl): SpellingFlaggedToken[] {
    if (!this.spellCheckSuggestions)
      return;

    let flaggedTokens: SpellingFlaggedToken[] = this.spellCheckSuggestions.find(x => x.rowKey === rowKey.get("rowKey").value).spellingFlaggedToken;

    let newarr  = [];
    
    flaggedTokens.map(t => {
      t.suggestions.map(sugg => {
        newarr.push({
          token: t.token,
          suggestion: sugg.suggestion
        });
      });
    });

    return newarr;
  }
}