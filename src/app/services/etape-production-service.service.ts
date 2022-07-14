import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtapeProductionServiceService {
  url = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }


  getNomEtapes() {
    return this.http.get(this.url + 'etapeProduction/getNomEtapes');
  }
  getEtapeById(id: any) {
    return this.http.get(this.url + 'etapeProduction/getEtapeById/' + id);
  }


  getLisEtape() {
    return this.http.get(this.url + 'etapeProduction/etapes');
  }


  updateEtape(id: any, etape: any): Observable<any> {
    return this.http.put<any>(this.url + 'etapeProduction/updateEtape/' + id, etape);
  }

  ajoutEtape(etape: any) {
    return this.http.post(this.url + 'etapeProduction/processEtapeProduction' , etape);
  }
}
