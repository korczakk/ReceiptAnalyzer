import { Component, OnInit } from "@angular/core";
import { AzureOcrService } from "../../Services/azure-ocr.service";
import { OcrResult } from '../../interfaces/ocr-result';
import { ImageFileService } from '../../Services/image-file.service';

@Component({
  templateUrl: "./receipt-import.component.html",
  styleUrls: ["./receipt-import.component.css"]
})
export class ReceiptImportComponent implements OnInit {

  public file: File;
  public ocrResult: OcrResult;

  constructor(
    private fileService: ImageFileService,
    private ocrService: AzureOcrService
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
  }

  public onSubmit() {
    if (!this.file) 
      return;

    this.ocrService.processImageWithOcr(this.file).subscribe(
      res => {
        this.ocrResult = res;
        console.log(this.ocrResult);               
      },
      err => {
        console.log(err);
      }
    );

  }
}