import { Component, OnInit, Input } from '@angular/core';
import { ReceiptProcessorService } from '../../Services/receipt-processor.service';
import { OcrRecognitionResult } from '../../interfaces/ocr-recognition-result';

@Component({
  selector: 'app-recognized-text',
  templateUrl: './recognized-text.component.html',
  styleUrls: ['./recognized-text.component.css']
})
export class RecognizedTextComponent implements OnInit {

  _ocrResult: OcrRecognitionResult;

  get ocrResult() {
    return this._ocrResult;
  }

  @Input()
  set ocrResult(value: OcrRecognitionResult) {
    this._ocrResult = value;

    this.createTextRecognizedPreview(value);
  }


  constructor(private receiptProcessor: ReceiptProcessorService) { }

  ngOnInit() {
  }

  private createTextRecognizedPreview(ocrResult: OcrRecognitionResult) {
    this.receiptProcessor.convertToLines(ocrResult);
  }

}
