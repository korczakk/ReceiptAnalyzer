import { Injectable } from "@angular/core";
import { OcrRecognitionResult } from "../interfaces/ocr-recognition-result";

@Injectable()
export class ReceiptProcessorService {
  constructor() {}

  public retriveReceiptData(recognizedText: OcrRecognitionResult) {
    //picks data about shop and shopping date
  }

  public retriveStoreName(recognizedText: OcrRecognitionResult) {}

  public retriveTotalAmount(recognizedText: OcrRecognitionResult) {}

  public retriveProductsDetails(receiptText: OcrRecognitionResult) {
    //wyciąga wszystkie produkty
  }

  public removeWhiteSpaces(text: string) {}
}
