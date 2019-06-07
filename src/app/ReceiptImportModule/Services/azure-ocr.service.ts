import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { HttpParamsOptions } from '@angular/common/http/src/params';

@Injectable()
export class AzureOcrService {
  constructor(private http: HttpClient) { }

  public processImageWithOcr(image: File): Observable<any> {
    let subject = new Subject();

    let reader = new FileReader();
    reader.onload = _event => {

      this.saveToAzureBlob(reader.result as string, image.name, image.type).subscribe(
        imageUri => {

          this.sendImageToOcrService(imageUri).subscribe(

            processedImage => {
              console.log("location: " + processedImage.headers.get('operation-location'));
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

    return subject.asObservable();
  }

  private sendImageToOcrService(imageUrl): Observable<any> {
    let url =
      "https://uksouth.api.cognitive.microsoft.com/vision/v2.0/read/core/asyncBatchAnalyze";

    let options = {
      observe: 'response' as 'body',
      headers: new HttpHeaders({
        "content-Typ": "application/json",
        "Ocp-Apim-Subscription-Key": "d82dea103d044a0883812b1384a71fcc"        
      })      
    };

    return this.http.post(url, imageUrl, options);
  }

  private getOcrResult(operationId: string) {
    let url = `https://uksouth.api.cognitive.microsoft.com/vision/v1.0/textOperations/${operationId}`;

    let options = {
      headers: new HttpHeaders({
        "Ocp-Apim-Subscription-Key": "d82dea103d044a0883812b1384a71fcc"
      })
    };

    this.http.get(url, options).subscribe((result: any) => {
      if (result.status == "Succeeded") {
        console.log(result);
      } else if (result.status == "Running") {
        this.getOcrResult(operationId);
      }
    });
  }

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
