import { Component, OnInit, Input } from '@angular/core';
import { OcrResult } from '../../interfaces/ocr-result';
import { ReceiptProcessorService } from '../../Services/receipt-processor.service';

@Component({
  selector: 'app-recognized-text',
  templateUrl: './recognized-text.component.html',
  styleUrls: ['./recognized-text.component.css']
})
export class RecognizedTextComponent implements OnInit {

  _ocrResult: OcrResult;

  get ocrResult() {
    return this._ocrResult;
  }

  @Input()
  set ocrResult(value: OcrResult) {
    this._ocrResult = value;

    this.createTextRecognizedPreview(value);
  }


  constructor(private receiptProcessor: ReceiptProcessorService) { }

  ngOnInit() {
  }

  private createTextRecognizedPreview(ocrResult: OcrResult) {
    this.receiptProcessor.convertToLines(ocrResult);
  }

}
