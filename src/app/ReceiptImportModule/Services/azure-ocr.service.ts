import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AzureOcrService {
  constructor(private http: HttpClient) {}

  public processImageWithOcr(image: File): Observable<any> {
    let url =
      "https://uksouth.api.cognitive.microsoft.com/vision/v1.0/ocr?language=pl";
    
      let options = {
      headers: new HttpHeaders({
        "content-Typ": "multipart/form-data",
        "Ocp-Apim-Subscription-Key": "d82dea103d044a0883812b1384a71fcc"
      })
    };

    let formData: FormData = new FormData();    
    formData.append("file", image);

    return this.http.post(url, formData, options);
  }
}
