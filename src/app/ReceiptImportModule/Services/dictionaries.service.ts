import { Injectable } from '@angular/core';
import { IStore } from '../interfaces/istore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DictionariesService {

  public STORES: IStore[];

  constructor(private http: HttpClient) { }

  public getStores(): IStore[] {
    return [];
  }


  private retriveStoresFromAzureTable(): Observable<IStore> {
    return this.http.get<IStore>('https://dataaccessapifunction.azurewebsites.net/api/GetStores?code=45gkHTGA3a43ABgm3VFbUXfHZMAYQVTVCVGaOUntitab8vlPbk65uA==');
  }
}
