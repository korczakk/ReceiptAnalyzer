import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class ImageFileService {

  constructor() { }

  public validateImageFile(file: File): string {    
    let matchingType = /jpeg|bmp|png|gif/i;

    if (matchingType.test(file.type) == false)
      return "Plik musi być w formacie JPG, GIF, PNG lub BMP.";

    if (file.size > 4194304)
      return "Plik nie może przekraczać 4MB."

    return "";
  }

  public convertToDataUrl(file: File): Observable<string> {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    let observable = Observable.create((observer) => {
      reader.onload = (_event) => {
        observer.next(reader.result);
      };
    });
    
    return observable;
  }
}
