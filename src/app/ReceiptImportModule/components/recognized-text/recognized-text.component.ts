import { Component, OnInit, Input } from '@angular/core';
import { IOcrRecognitionResult } from '../../interfaces/iocr-recognition-result';
import { ReceiptDataService } from '../../Services/receipt-data.service';
import { IReceipt } from '../../interfaces/ireceipt';
import { ReceiptProcessorService } from '../../Services/receipt-processor.service';

@Component({
  selector: 'app-recognized-text',
  templateUrl: './recognized-text.component.html',
  styleUrls: ['./recognized-text.component.css']
})
export class RecognizedTextComponent implements OnInit {

  @Input() ocrResult: IOcrRecognitionResult;
  private receiptData: IReceipt;

  constructor(
    private receiptDataService: ReceiptDataService,
    private receiptProcessor: ReceiptProcessorService) {  }

  ngOnInit() {
    this.receiptDataService.receiptData.subscribe(data => {
      this.receiptData = data;
    });
  }

  addShoppingDate(text) {
    let resultDate = this.receiptProcessor.getShoppingDate(text);
    this.receiptData.shoppingDate = resultDate;
  }

  addTotalAmount(text) {
    let amount = this.receiptProcessor.getTotalAmount(text);
    this.receiptData.totalAmount = amount;    
  }

  addNewItem(text:string) {
    //get quantity
    let quantity = this.receiptProcessor.getQuantity(text);

    //get price 
    let price = this.receiptProcessor.getProductPrice(text);

    //get product name

    
    //compose new IProduct object and push it
  }
}
