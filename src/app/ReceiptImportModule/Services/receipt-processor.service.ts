import { Injectable } from "@angular/core";
import { IOcrRecognitionResult } from "../interfaces/iocr-recognition-result";

@Injectable()
export class ReceiptProcessorService {
  constructor() { }

  private dateFormats: RegExp[] = [
    /\d{4}-\d{2}-\d{2}/,
    /\d{2}-\d{2}-\d{4}/
  ];

  public convertToDateString(date: string): string {
    let result: RegExpExecArray;

    for (let i = 0; i < this.dateFormats.length; i++) {
      const exp = this.dateFormats[i];
     
      result = exp.exec(date)

      if (result) {
        break;
      }
    }

    return result ? result[0] : "";
  }

  public retriveStoreName(recognizedText: IOcrRecognitionResult) { }

  public retriveTotalAmount(recognizedText: IOcrRecognitionResult) { }

  public retriveProductsDetails(receiptText: IOcrRecognitionResult) {
    //wyciąga wszystkie produkty
  }

  public removeWhiteSpaces(text: string) { }
}
