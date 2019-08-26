import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpellcheckModel } from '../interfaces/spellcheck-model';
import { ReceiptItem } from '../interfaces/receipt-item';
import { Observable } from 'rxjs';

@Injectable()
export class SpellCheckingService {

  constructor(private http: HttpClient) { }

  public checkSpelling(items: ReceiptItem[]): Observable<SpellcheckModel[]> {
    let linesToSpellCheck: {
      [rowKey: string]: string
    } = {};
    
    items.map(receiptItem => {
      linesToSpellCheck[receiptItem.rowKey] = receiptItem.productName;
    });
    
    //call API
    return this.http.post<SpellcheckModel[]>("https://dataaccessapifunction.azurewebsites.net/api/SpellCheck?code=fAaQ7uJXwmXDv4EcWAZN7cARD4SY8zBW33KYO084nztlAClt7CJxJQ==", 
    JSON.stringify(linesToSpellCheck));
  }
}
