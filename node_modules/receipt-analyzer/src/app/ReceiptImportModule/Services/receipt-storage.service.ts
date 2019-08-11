import { Injectable } from '@angular/core';
import { Receipt } from '../interfaces/receipt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReceiptStorageService {

  constructor(private httpClient: HttpClient) { }

  addNewReceipt(receipt: Receipt): Observable<any> {
    let url = 'https://dataaccessapifunction.azurewebsites.net/api/CreateNewReceipt?code=Qz/9qreHJWOTAdQXuScwq2AaTe3yx6/a3VJsMbg46fMn1tRV00P9vw==';

    let body = JSON.stringify(receipt);
    
    return this.httpClient.post(url, body);
  }
}
