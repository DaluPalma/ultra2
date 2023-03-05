import { Injectable } from '@angular/core';
import { ResponseIn } from 'src/app/modelos/response.interface';
import { LoginInt } from 'src/app/modelos/login.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://635fe51f3e8f65f283be4b05.mockapi.io/users';
const url = 'https://635fe51f3e8f65f283be4b05.mockapi.io/users/1/transactions';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private http: HttpClient) { }

  getLogin(): Observable<any>{
    return this.http.get(API_URL + 'all', { responseType: 'text'});
  }
  getTransacciones(): Observable<any>{
    return this.http.get(url + 'all', { responseType: 'text'});
  }


}
