import { Component, OnInit, Input } from '@angular/core';
import { OcrRecognitionResult } from '../../interfaces/ocr-recognition-result';
import { ReceiptDataService } from '../../Services/receipt-data.service';

@Component({
  selector: 'app-recognized-text',
  templateUrl: './recognized-text.component.html',
  styleUrls: ['./recognized-text.component.css']
})
export class RecognizedTextComponent implements OnInit {

  @Input() ocrResult: OcrRecognitionResult;
  private receiptData: string;

  constructor(private receiptDataService: ReceiptDataService) { }

  ngOnInit() {
    this.receiptDataService.receiptData.subscribe(data => {
      this.receiptData = data;
    });
  }

  onBlur() {
    //DOWOLNY INY EVENT
    this.receiptDataService.addItem(this.receiptData);
  }


}
