import { Injectable } from '@angular/core';
import { IStore } from '../interfaces/istore';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DictionariesService {

  constructor(private http: HttpClient) { }

  public getStores(): IStore[] {
    return [];
  }
}
