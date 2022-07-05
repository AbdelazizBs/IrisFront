import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  url = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }



  getClientById(id: any) {
    return this.http.get(this.url + 'client/getbyid/' + id);
  }

  getPersonnelById(id: any) {
    return this.http.get(this.url + 'personnel/getPersonnelById/' + id);
  }
  // delete(id:any){
  //   return this.http.delete(this.endpoint.url+'agent-/delete/'+id)
  // }
  update(id: any, client: any) {
    return this.http.put(this.url + 'client/update/' + id, client);
  }
}
