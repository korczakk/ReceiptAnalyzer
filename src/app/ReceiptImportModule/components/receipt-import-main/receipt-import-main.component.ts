import { Component, OnInit } from "@angular/core";
import { ImageFileService } from '../../Services/image-file.service';
import { IOcrRecognitionResult } from '../../interfaces/iocr-recognition-result';
import { AzureOcrServiceBase } from '../../interfaces/AzureOcrServiceBase';

@Component({
  templateUrl: "./receipt-import-main.component.html",
  styleUrls: ["./receipt-import-main.component.css"]
})
export class ReceiptImportMainComponent implements OnInit {

  public file: File;
  public ocrResult: IOcrRecognitionResult;

  constructor(
    private fileService: ImageFileService,
    private ocrService: AzureOcrServiceBase
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
