import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AzureOcrService {
  constructor(private http: HttpClient) {}

  public processImageWithOcr(image: File): Observable<any> {
    let subject = new Subject();

    let reader = new FileReader();
    reader.onload = (_event) => {


    this.sendImageToOcrService(reader.result).subscribe(
      result => {
        this.getOcrResult(result);
      },
      error => {
        console.log(error);
      });

    };

    reader.readAsArrayBuffer(image);

    return subject.asObservable();
  }

  private sendImageToOcrService(image): Observable<any> {
    let url =
      "https://uksouth.api.cognitive.microsoft.com/vision/v1.0/recognizeText?handwriting=true";

    let options = {
      headers: new HttpHeaders({
        "content-Typ": "application/octet-stream",
        "Ocp-Apim-Subscription-Key": "d82dea103d044a0883812b1384a71fcc"
      })
    };


    return this.http.post(url, image, options);
  }

  private getOcrResult(operationId: string) {
    let url = `https://uksouth.api.cognitive.microsoft.com/vision/v1.0/textOperations/${operationId}`;

    let options = {
      headers: new HttpHeaders({
        "Ocp-Apim-Subscription-Key": "d82dea103d044a0883812b1384a71fcc"
      })
    };

    this.http.get(url, options).subscribe(
      (result: any) => {
        if (result.status == 'Succeeded') {
          console.log(result);
        }
        else if (result.status == 'Running') {
          this.getOcrResult(operationId);
        }
      }
    )
  }
}
