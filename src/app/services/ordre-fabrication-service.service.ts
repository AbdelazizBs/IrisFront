import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdreFabricationServiceService {
  url = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }

  addOf( of: any) {
    return this.http.post(this.url + 'ordreFabrication/addOf' , of);
  }
}
