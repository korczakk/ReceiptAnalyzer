import { Component, OnInit } from "@angular/core";
import { ImageFileService } from "../Services/image-file.service";
import { AzureOcrService } from "../Services/azure-ocr.service";
import { RecognizedText } from 'src/app/interfaces/recognized-text';
import { ReceiptProcessorService } from '../Services/receipt-processor.service';

@Component({
  templateUrl: "./receipt-import.component.html",
  styleUrls: ["./receipt-import.component.css"]
})
export class ReceiptImportComponent implements OnInit {
  public selectedImage;
  public file: File;

  constructor(
    private fileService: ImageFileService,
    private ocrService: AzureOcrService,
    private receiptProcessor: ReceiptProcessorService
  ) {}

  ngOnInit() {
    //Get dictionaries
  }

  public onFileSelected(file) {
    if (!file) return;

    let errorMessage = this.fileService.validateImageFile(file);
    if (errorMessage != "") {
      alert(errorMessage);
      return;
    }

    this.file = file;

    this.fileService.convertToDataUrl(file).subscribe(x => {
      this.selectedImage = x;
    });
  }

  public onSubmit() {
    if (!this.file) 
      return;

    this.ocrService.processImageWithOcr(this.file).subscribe(
      res => {
        let recognizedText: RecognizedText = res;
        
        //process text        
        this.receiptProcessor.retriveGeneralData(res);
      },
      err => {
        console.log(err);
      }
    );

  }
}
