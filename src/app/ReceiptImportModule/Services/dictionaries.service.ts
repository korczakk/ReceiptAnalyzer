import { Injectable } from '@angular/core';
import { IStore } from '../interfaces/istore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { store } from '@angular/core/src/render3';
import { IProductCategory } from '../interfaces/iproduct-category';

@Injectable()
export class DictionariesService {
  
  private stores: BehaviorSubject<IStore[]> = new BehaviorSubject([]);
  private categories: BehaviorSubject<IProductCategory[]> = new BehaviorSubject([]);

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

  public getProductCategories() : Observable<IProductCategory[]> {

    if(this.categories.getValue().length == 0) {
      this.retriveCategoriesFromAzureTable().subscribe(
        result => {
          this.categories.next(result);
      },
      error => {
        alert(error);
      })
    }
        
    return this.categories.asObservable();
  }

  private retriveStoresFromAzureTable(): Observable<IStore[]> {
    let url = "https://dataaccessapifunction.azurewebsites.net/api/GetStores?code=45gkHTGA3a43ABgm3VFbUXfHZMAYQVTVCVGaOUntitab8vlPbk65uA==";

    return this.http.get<IStore[]>(url);
  }

  private retriveCategoriesFromAzureTable() : Observable<IProductCategory[]> {
    let url = 'https://dataaccessapifunction.azurewebsites.net/api/GetCategories?code=6kqGi/C1Tl1A/EuzpbUcgTwFk8ObEsHHw97buyBFdV7E9/RkRlDi9Q==';

    return this.http.get<IProductCategory[]>(url);
  }
}
