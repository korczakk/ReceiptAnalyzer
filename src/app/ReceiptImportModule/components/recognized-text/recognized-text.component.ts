import { Component, OnInit, Input } from '@angular/core';
import { IOcrRecognitionResult } from '../../interfaces/iocr-recognition-result';
import { ReceiptDataService } from '../../Services/receipt-data.service';
import { IReceipt } from '../../interfaces/ireceipt';

@Component({
  selector: 'app-recognized-text',
  templateUrl: './recognized-text.component.html',
  styleUrls: ['./recognized-text.component.css']
})
export class RecognizedTextComponent implements OnInit {

  @Input() ocrResult: IOcrRecognitionResult;
  private receiptData: IReceipt;

  constructor(private receiptDataService: ReceiptDataService) {  }

  ngOnInit() {
    this.receiptDataService.receiptData.subscribe(data => {
      this.receiptData = data;
    });
  }

  addShoppingDate(text) {
    this.receiptDataService.setShoppingDate(text);
  }


}
