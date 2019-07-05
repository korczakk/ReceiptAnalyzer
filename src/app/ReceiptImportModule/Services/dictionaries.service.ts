import { Injectable } from '@angular/core';
import { IStore } from '../interfaces/istore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { store } from '@angular/core/src/render3';

@Injectable()
export class DictionariesService {
  
  private stores: BehaviorSubject<IStore[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  public getStores(): Observable<IStore[]> {  

    if(this.stores.getValue().length == 0) {
      this.retriveStoresFromAzureTable().subscribe(
        result => {
          this.stores.next(result);
      },
      error => {
        alert(error);
      })
    }
        
    return this.stores.asObservable();
  }


  private retriveStoresFromAzureTable(): Observable<IStore[]> {
    let url = "https://dataaccessapifunction.azurewebsites.net/api/GetStores?code=45gkHTGA3a43ABgm3VFbUXfHZMAYQVTVCVGaOUntitab8vlPbk65uA==";

    return this.http.get<IStore[]>(url);
  }
}
