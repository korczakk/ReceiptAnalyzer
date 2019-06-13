import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { IOcrRecognitionResult } from '../interfaces/iocr-recognition-result';
import { AzureOcrServiceBase } from '../interfaces/AzureOcrServiceBase';

@Injectable()
export class AzureOcrService extends AzureOcrServiceBase {
  constructor(private http: HttpClient) {
    super();
   }

  private subject = new Subject<IOcrRecognitionResult>();

  public processImageWithOcr(image: File): Observable<IOcrRecognitionResult> {

    let reader = new FileReader();
    reader.onload = _event => {

      this.saveToAzureBlob(reader.result as string, image.name, image.type).subscribe(
        imageUri => {

          this.sendImageToOcrService(imageUri).subscribe(

            processedImage => {
              let ocrResultLocation = processedImage.headers.get('operation-location');

              this.getOcrResult(ocrResultLocation);
            },
            error => {
              console.log(error);
            }
          );
        },
        error => {
          console.log(error);
        }
      );
    };

    reader.readAsDataURL(image);

    return this.subject.asObservable();
  }

  /**
   * Sends POST request to Azure Cognitive services with image URL to initiate OCR process.
   * In return it gets URI to get final result.
   */
  private sendImageToOcrService(imageUrl): Observable<any> {
    let url = "https://uksouth.api.cognitive.microsoft.com/vision/v1.0/recognizeText";

    let options = {
      observe: 'response' as 'body',
      headers: new HttpHeaders({
        "content-Typ": "application/json",
        "Ocp-Apim-Subscription-Key": "d82dea103d044a0883812b1384a71fcc"        
      })      
    };

    return this.http.post(url, imageUrl, options);
  }

  /** 
    Gets final result of OCR process
  */
  private getOcrResult(operationLocation: string) {

    let options = {
      headers: new HttpHeaders({
        "Ocp-Apim-Subscription-Key": "d82dea103d044a0883812b1384a71fcc"
      })
    };

    this.http.get(operationLocation, options).subscribe((result: any) => {
      if (result.status == "Succeeded") {
        this.subject.next(result.recognitionResult);
      } else if (result.status == "Running") {
        this.getOcrResult(operationLocation);
      }
    });
  }

  /**
   * Saves image file into Azure blob storage and retrives its URI
   */
  private saveToAzureBlob(dataUrl: string, fileName: string, fileType: string): Observable<object> {

    let base64: string = dataUrl.substr(dataUrl.indexOf("base64") + 7);
    let url = 'https://receiptanalyzerfunctions.azurewebsites.net/api/AddImageFile?code=TwVlL/eb5ekF09IvztG61cOo8walTosG9ypTnVKi96Qy2QCiAnHyYA==';

    let object = {
      FileType: fileType,
      FileContent: base64
    };

    return this.http.post(url, JSON.stringify(object));
  }
}
