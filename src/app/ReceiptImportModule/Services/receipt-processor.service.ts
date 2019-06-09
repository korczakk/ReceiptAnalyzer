import { Injectable } from '@angular/core';
import { OcrRecognitionResult } from '../interfaces/ocr-recognition-result';


@Injectable()
export class ReceiptProcessorService {

  constructor() { }

  public retriveGeneralData(receiptText: OcrRecognitionResult) {
    //picks data about shop and shopping date

  }

  public retriveProductsDetails(receiptText: OcrRecognitionResult) {
    //wyciąga wszystkie produkty
    
  }

  public convertToLines(ocrResult: OcrRecognitionResult): string[] {     
    return [];
  }
}
