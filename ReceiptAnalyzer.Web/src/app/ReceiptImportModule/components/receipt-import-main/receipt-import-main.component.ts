import { Component, OnInit } from "@angular/core";
import { ImageFileService } from '../../Services/image-file.service';
import { IOcrRecognitionResult } from '../../interfaces/iocr-recognition-result';
import { AzureOcrServiceBase } from '../../interfaces/AzureOcrServiceBase';
import { ReceiptProcessorService } from '../../Services/receipt-processor.service';
import { ReceiptDataService } from '../../Services/receipt-data.service';

@Component({
  templateUrl: "./receipt-import-main.component.html",
  styleUrls: ["./receipt-import-main.component.css"]
})
export class ReceiptImportMainComponent implements OnInit {

  public file: File;
  public ocrResult: IOcrRecognitionResult = {} as IOcrRecognitionResult;
  showWaiting: boolean;

  constructor(
    private fileService: ImageFileService,
    private ocrService: AzureOcrServiceBase,
    private receiptProcessor: ReceiptProcessorService,
    private receiptDataService: ReceiptDataService
  ) {}

  ngOnInit() {  }

  public onFileSelected(file) {
    if (!file) return;
    
    let errorMessage = this.fileService.validateImageFile(file);
    if (errorMessage != "") {
      alert(errorMessage);
      return;
    }

    this.file = file;

    this.receiptDataService.clear(); 
  }

  public onSubmit() {
    this.showWaiting = true;
    
    this.ocrService.processImageWithOcr(this.file).subscribe(
      res => {
        this.ocrResult = res;      
        

        //handle automatic form filling after OCR         
        this.receiptProcessor.retriveShoppingDate(res).subscribe(shoppingDate => {
          this.receiptDataService.addShoppingDate(shoppingDate);
        });

        this.receiptProcessor.retriveStoreName(res).subscribe(store => {
          this.receiptDataService.addStore(store);
        });

        this.receiptProcessor.retriveTotalAmount(res).subscribe(price => {
          this.receiptDataService.addTotalAmount(price);
        });

        this.receiptProcessor.retriveProductsDetails(res).subscribe(products => {
          this.receiptDataService.addProductItems(products);

          this.showWaiting = false;
        });

      },
      err => {
        console.log(err);

        this.showWaiting = false;
      }
    );

  }
}
