import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICryptoCurrencies } from './icrypto-currencies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrenciesService {

  constructor(private http:HttpClient) { }

  url = "https://api.coincap.io/v2/assets";

  fetchAll(): Observable<ICryptoCurrencies> {
    return this.http.get<ICryptoCurrencies>(this.url);
  }
}
