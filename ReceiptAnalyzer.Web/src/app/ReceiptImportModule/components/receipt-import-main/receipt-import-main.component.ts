import { Component, OnInit } from "@angular/core";
import { ImageFileService } from '../../Services/image-file.service';
import { IOcrRecognitionResult } from '../../interfaces/iocr-recognition-result';
import { AzureOcrServiceBase } from '../../interfaces/AzureOcrServiceBase';
import { ReceiptProcessorService } from '../../Services/receipt-processor.service';
import { ReceiptDataService } from '../../Services/receipt-data.service';
import { ReceiptFormUpdatingProgress } from '../../interfaces/ReceiptFormUpdatingProgress';
import { SpellCheckingService } from '../../Services/spell-checking.service';
import { SpellcheckModel } from '../../interfaces/spellcheck-model';
import { DictionariesService } from '../../Services/dictionaries.service';
import { ProductCategoriesMatch } from '../../interfaces/ProductCategoriesMatch';

@Component({
  templateUrl: "./receipt-import-main.component.html",
  styleUrls: ["./receipt-import-main.component.css"]
})
export class ReceiptImportMainComponent implements OnInit {

  public file: File;
  public ocrResult: IOcrRecognitionResult = {} as IOcrRecognitionResult;
  formUpdatingProgress: ReceiptFormUpdatingProgress;
  spellCheckSuggestions: SpellcheckModel[];
  productCategoriesMatch: ProductCategoriesMatch[];

  constructor(
    private fileService: ImageFileService,
    private ocrService: AzureOcrServiceBase,
    private receiptProcessor: ReceiptProcessorService,
    private receiptDataService: ReceiptDataService,
    private spellCheck: SpellCheckingService,
    private dictionaries: DictionariesService
  ) { }

  ngOnInit() {
    this.formUpdatingProgress = new ReceiptFormUpdatingProgress();

    if(this.productCategoriesMatch) {
      this.dictionaries.getProductCategoriesMatch().subscribe(result => {
        this.productCategoriesMatch = result;
      },
      error => {
        console.log(error);
      });
    }    
  }

  public onFileSelected(file) {
    if (!file) return;

    let errorMessage = this.fileService.validateImageFile(file);
    if (errorMessage != "") {
      alert(errorMessage);
      return;
    }

    this.file = file;

    this.receiptDataService.clear();
    this.ocrResult = {} as IOcrRecognitionResult;
  }

  public onSubmit() {
    if (!this.file) return;

    this.formUpdatingProgress.setAllToTrue();

    this.ocrService.processImageWithOcr(this.file).subscribe(
      res => {
        this.ocrResult = res;


        //handle automatic form filling after OCR         
        this.receiptProcessor.retriveShoppingDate(res).subscribe(shoppingDate => {
          this.receiptDataService.addShoppingDate(shoppingDate);
          this.formUpdatingProgress.updatingShoppingDate = false;
        });

        this.receiptProcessor.retriveStoreName(res).subscribe(store => {
          this.receiptDataService.addStore(store);
          this.formUpdatingProgress.updatingStore = false;
        });

        this.receiptProcessor.retriveTotalAmount(res).subscribe(price => {
          this.receiptDataService.addTotalAmount(price);
          this.formUpdatingProgress.updatingTotalAmount = false;
        });

        this.receiptProcessor.retriveProductsDetails(res).subscribe(products => {
          this.receiptDataService.addProductItems(products);

          //Call spell check API here
          this.spellCheck.checkSpelling(products).subscribe(
            suggestions => {
              console.log(suggestions);
              this.spellCheckSuggestions = suggestions;
              this.formUpdatingProgress.updatingReceiptItems = false;
            },
            error => {
              console.log(error);

              this.formUpdatingProgress.updatingReceiptItems = false;
            });
            
            //Try to guess what are a categories
            
        });

      },
      err => {
        console.log(err);

        this.formUpdatingProgress = new ReceiptFormUpdatingProgress();
      }
    );

  }
}
