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

  constructor(private receiptDataService: ReceiptDataService) { }

  ngOnInit() {
    this.receiptDataService.receiptData.subscribe(data => {
      this.receiptData = data;
    });
  }

  // clickplus() {
  //   //DOWOLNY INNY EVENT
  //  // this.receiptDataService.addItem(this.receiptData);

  //  this.receiptDataService.addItem({
  //     store: { StoreName: "CCC" },
  //     shoppingDate: "2019-02-01",
  //     totalAmount: 10.02,
  //     items: [{
  //       productName: "prod1",
  //       productsQuantity: 1,
  //       productPrice: 10,
  //       productCategory: { CategoryName: "Leki" }
  //     },
  //     {
  //       productName: "prod2",
  //       productsQuantity: 2,
  //       productPrice: 20,
  //       productCategory: { CategoryName: "Ubrania" }
  //     }]

  //   });
  // }


}
