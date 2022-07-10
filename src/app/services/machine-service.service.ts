import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineServiceService {
  url = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }


  getMachineById(id: any) {
      return this.http.get(this.url + 'machine/getMachineById/' + id);
    }



  updateMachine(id: any, machine: any): Observable<any> {
    return this.http.put<any>(this.url + 'machine/updateMachine/' + id, machine);
  }

}
