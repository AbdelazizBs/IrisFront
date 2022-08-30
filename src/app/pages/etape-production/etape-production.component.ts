import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
import {EtapeProduction} from '../../model/EtapeProduction.model';

@Component({
  selector: 'app-etape-production',
  templateUrl: './etape-production.component.html',
  styleUrls: ['./etape-production.component.scss']
})
export class EtapeProductionComponent implements OnInit {
listEtape: any ;
  dataEtapeP: EtapeProduction [] ;
  constructor(private  etapeService: EtapeProductionServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getLisEtape();

  }

  updateEtape(data: any) {
    const f: FormData = new FormData();
    f.append('nomEtape', data.data.nomEtape);
    f.append('typeEtape', data.data.typeEtape);
    this.etapeService.updateEtape(data.data.id, f).subscribe(
      (res) => {
        console.log(res);
this.refreshListEtapes();
},
      err => {
        console.log(err);

      }
    );
  }
  addEtape(data: any) {
    const f: FormData = new FormData();
    f.append('nomEtape', data.data.nomEtape);
    f.append('typeEtape', data.data.typeEtape);
    this.etapeService.ajoutEtape(f).subscribe(
      (res) => {
        console.log(res);
this.refreshListEtapes();
},
      err => {
        console.log(err);

      }
    );
  }

   getLisEtape() {
    this.etapeService.getLisEtape().subscribe((data: any) => {
      this.listEtape = data;
      this.dataEtapeP = this.listEtape ;
      console.warn('*---**', this.listEtape);
    });
  }

  delete(data: any) {
    this.etapeService.delete(data.data.id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListEtapes();
        this.router.navigate(['/etape-production']);
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListEtapes() {
    this.etapeService.getLisEtape().subscribe(
      response => {
        this.listEtape = response;      }
    );
  }

}
