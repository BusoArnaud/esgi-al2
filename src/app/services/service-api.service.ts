import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { }

  getMock(): Observable<any> {
    return this.http.get('https://run.mocky.io/v3/76192595-0c3c-4eb6-ae36-4f8370fde8f7');
  }
}
