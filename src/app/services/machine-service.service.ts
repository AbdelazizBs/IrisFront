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

  // getEtat(id: any, machine: any) {
  //   return this.http.put(this.url + 'machine/etat/' + id , machine);
  // }

  setEtatEnMaintenance(id: any) {
    return this.http.put(this.url + 'machine/setEtatEnMaintenance/' + id , {});
  }
  setEtatEnPanne(id: any) {
    return this.http.put(this.url + 'machine/setEtatEnPanne/' + id , {});
  }

  setEtatEnRepos(id: any) {
    return this.http.put(this.url + 'machine/setEtatEnRepos/' + id , {});
  }

  setEtatEnmarche(id: any) {
    return this.http.put(this.url + 'machine/setEtatEnmarche/' + id , {});
  }


  updateMachine(id: any, machine: any): Observable<any> {
    return this.http.put<any>(this.url + 'machine/updateMachine/' + id, machine);
  }

  updateEtatMachine(id: any, machine: any): Observable<any> {
    return this.http.put<any>(this.url + 'machine/updateMachine/' + id, machine);
  }

  getLisMachine() {
    return this.http.get(this.url + 'machine/getListMachine');
  }


  delete(id: any) {
    return this.http.delete<any>(this.url + 'machine/deleteMachine/' + id);

  }
  ajoutMachine(machine: any) {
    return this.http.post(this.url + 'machine/addMachine' , machine);
  }
}
