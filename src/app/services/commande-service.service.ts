import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {
  url = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }
  inverse(id: any, f: any): Observable<any> {
    return this.http.put(this.url + 'personnel/inverse/' + id, f);
  }
  getListCommandes() {
    return this.http.get(this.url + 'commande/commandes' );  }
  getCmdById(id: any) {
    return this.http.get(this.url + 'commande/' + id  );  }

  ajoutCommande(cmd: any) {
    return this.http.post(this.url + 'commande/addCommande' , cmd);
  }
  delete(id: any) {
    return this.http.delete<any>(this.url + 'commande/deleteCommande/' + id);

  }
  updateCmd(id: any, cmd: any): Observable<any> {
    console.log('id', id);
    console.log('cmd', cmd);
    console.log('dateCmd', cmd.dateCmd);
    console.log('typesCmd', cmd.typesCmd);
    return this.http.put<any>(this.url + 'commande/updateCommande/' + id, cmd);
  }
}
