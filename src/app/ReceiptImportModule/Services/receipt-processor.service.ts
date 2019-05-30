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
    
    let ret: Word[] = [];

    ocrResult.regions.map((reg: Region) => {
      
      reg.lines.map((ln: TextLine) => {
        
       let temp = ln.words.reduce((total, curr) => {
        total.text = total.text.concat(' ') ;

        let txt = total.text.concat(curr.text);
         
          return {text: txt, boundingBox: ''};
        });

        ret.push(temp);
      });
    });

    return [];
  }
}
