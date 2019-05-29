import { Injectable } from '@angular/core';
import { RecognizedText } from 'src/app/interfaces/recognized-text';

@Injectable()
export class ReceiptProcessorService {

  constructor() { }

  public retriveGeneralData(receiptText: RecognizedText) {
    //picks data about shop and shopping date

  }

  public retriveProductsDetails(receiptText: RecognizedText) {
    //wyciąga wszystkie produkty
    
  }
}
