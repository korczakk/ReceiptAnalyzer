import { Component, OnInit, Input } from '@angular/core';
import { OcrRecognitionResult } from '../../interfaces/ocr-recognition-result';

@Component({
  selector: 'app-recognized-text',
  templateUrl: './recognized-text.component.html',
  styleUrls: ['./recognized-text.component.css']
})
export class RecognizedTextComponent implements OnInit {

  @Input() ocrResult: OcrRecognitionResult;

  // get ocrResult() {
  //   return this._ocrResult;
  // }

  // @Input()
  // set ocrResult(value: OcrRecognitionResult) {
  //   this._ocrResult = value;

  //   this.createTextRecognizedPreview(value);
  // }


  constructor() { }

  ngOnInit() {
  }

  // private createTextRecognizedPreview(ocrResult: OcrRecognitionResult) {
  // }

}
