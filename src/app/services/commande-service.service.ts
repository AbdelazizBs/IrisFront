import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {
  url = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }

  getMyListCommandes(id: any) {
    return this.http.get(this.url + 'commande/' + id + '/myCommandes' );  }

  inverse(id: any, f: any): Observable<any> {
    return this.http.put(this.url + 'personnel/inverse/' + id, f);
  }
  getListCommandes() {
    return this.http.get(this.url + 'commande/commandes' );  }
  getCmdById(id: any) {
    return this.http.get(this.url + 'commande/' + id  );  }
}
