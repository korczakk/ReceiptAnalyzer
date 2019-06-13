import { Injectable } from "@angular/core";
import { IOcrRecognitionResult } from "../interfaces/iocr-recognition-result";

@Injectable()
export class ReceiptProcessorService {
  constructor() {}

  public retriveReceiptData(recognizedText: IOcrRecognitionResult) {
    //picks data about shop and shopping date
  }

  public retriveStoreName(recognizedText: IOcrRecognitionResult) {}

  public retriveTotalAmount(recognizedText: IOcrRecognitionResult) {}

  public retriveProductsDetails(receiptText: IOcrRecognitionResult) {
    //wyciąga wszystkie produkty
  }

  public removeWhiteSpaces(text: string) {}
}
