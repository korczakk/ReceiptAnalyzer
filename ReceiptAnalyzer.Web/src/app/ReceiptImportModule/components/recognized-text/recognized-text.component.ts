import { Component, OnInit, Input } from '@angular/core';
import { IOcrRecognitionResult } from '../../interfaces/iocr-recognition-result';
import { ReceiptDataService } from '../../Services/receipt-data.service';
import { Receipt } from '../../interfaces/receipt';
import { ReceiptProcessorService } from '../../Services/receipt-processor.service';
import { ReceiptItem } from '../../interfaces/receipt-item';

@Component({
  selector: 'app-recognized-text',
  templateUrl: './recognized-text.component.html',
  styleUrls: ['./recognized-text.component.css']
})
export class RecognizedTextComponent implements OnInit {

  @Input() ocrResult: IOcrRecognitionResult;
  private receiptData: Receipt;

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
    this.receiptDataService.addShoppingDate(resultDate);
  }

  addTotalAmount(text) {
    let amount = this.receiptProcessor.getTotalAmount(text);
    this.receiptDataService.addTotalAmount(amount); 
  }

  addNewItem(text:string) {
    let quantity = this.receiptProcessor.getQuantity(text);

    let price = this.receiptProcessor.getProductPrice(text);

    let productName = this.receiptProcessor.getProductName(text);
    
    this.receiptDataService.addNewProductItem(productName, quantity, price);
  }

  updateProductItem(item: ReceiptItem, text: string) {
    let quantity = this.receiptProcessor.getQuantity(text);

    let price = this.receiptProcessor.getProductPrice(text);

    let productName = this.receiptProcessor.getProductName(text);

    this.receiptDataService.updateProductItem(item.rowKey, productName, price, quantity);
  }
}
