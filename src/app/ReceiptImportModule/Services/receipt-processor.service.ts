import { Injectable } from "@angular/core";
import { IOcrRecognitionResult } from "../interfaces/iocr-recognition-result";

@Injectable()
export class ReceiptProcessorService {
  constructor() { }

  private dateFormats: RegExp[] = [
    /\d{4}-\d{2}-\d{2}/,
    /\d{2}-\d{2}-\d{4}/,
    /\d{2}.\d{2}.\d{4}/
  ];

  public convertToDateString(date: string): string {
    let isIncorrectOrder = /\d{2}/;
    let dateString: string;

    this.dateFormats.map(exp => {     
      let result = exp.exec(date)

      if (result) {
        if(isIncorrectOrder.test(result[0])) {
          let parts = result[0].replace('.', '-').split('-');

          dateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
        else {
          dateString = result[0];
        }
      }
    });

    return dateString;
  }

  public retriveStoreName(recognizedText: IOcrRecognitionResult) { }

  public retriveTotalAmount(recognizedText: IOcrRecognitionResult) { }

  public retriveProductsDetails(receiptText: IOcrRecognitionResult) {
    //wyciąga wszystkie produkty
  }

  public removeWhiteSpaces(text: string) { }
}
