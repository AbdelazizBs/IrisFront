import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

 // private API_URL = environment.url;

  url = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  getClientById(id: any) {
    return this.http.get(this.url + 'client/getbyid/' + id);
  }

  getPersonnelById(id: any) {
    return this.http.get(this.url + 'personnel/getPersonnelById/' + id);
  }
  // delete(id:any){
  //   return this.http.delete(this.endpoint.url+'agent-/delete/'+id)
  // }
  update(id: any, personnel: any): Observable<any> {
   return this.http.put<any>(this.url + 'personnel/updatePersonnel/' + id, personnel);
  }
   getNomMachine() {
      return this.http.get<any>(this.url + 'machine/getNomMachine');
    }

}
