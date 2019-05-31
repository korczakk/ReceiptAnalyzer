import { Injectable } from '@angular/core';
import { OcrResult } from '../interfaces/ocr-result';
import { TextLine } from '../interfaces/text-line';
import { Region } from '../interfaces/region';
import { Word } from '../interfaces/word';

@Injectable()
export class ReceiptProcessorService {

  constructor() { }

  public retriveGeneralData(receiptText: OcrResult) {
    //picks data about shop and shopping date

  }

  public retriveProductsDetails(receiptText: OcrResult) {
    //wyciąga wszystkie produkty
    
  }

  public convertToLines(ocrResult: OcrResult): string[] {     
    return [];
  }
}
