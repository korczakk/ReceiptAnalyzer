import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class AzureOcrService {
  constructor(private http: HttpClient) {}

  public processImageWithOcr(image: File): Observable<any> {
    let subject = new Subject();

    let reader = new FileReader();
    reader.onload = _event => {

      this.saveToAzureBlob(reader.result as string, image.name, image.type).subscribe(
        imageUri => {

          this.sendImageToOcrService(imageUri).subscribe(

            ocrResult => {
              this.getOcrResult(ocrResult).subscribe(
                textResult => {

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
        },
        error => {
          console.log(error);
        }
      );
    };

    reader.readAsDataURL(image);

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

    this.http.get(url, options).subscribe((result: any) => {
      if (result.status == "Succeeded") {
        console.log(result);
      } else if (result.status == "Running") {
        this.getOcrResult(operationId);
      }
    });
  }

  private saveToAzureBlob(dataUrl: string, fileName: string, fileType: string): Observable<object> {

    let base64: string = dataUrl.substr(dataUrl.indexOf("base") - 1);
    let url = 'https://receiptanalyzerfunctions.azurewebsites.net/api/AddImageFile?code=TwVlL/eb5ekF09IvztG61cOo8walTosG9ypTnVKi96Qy2QCiAnHyYA==';
    
    let object = {
      fileType: fileType,
      fileContent: base64
    };
    
    return this.http.post(url, object);
  }
}
