import { Component, OnInit } from '@angular/core';
import {PersonnelServiceService} from '../../services/personnel-service.service';
import {Router} from '@angular/router';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';

@Component({
  selector: 'app-etape-production',
  templateUrl: './etape-production.component.html',
  styleUrls: ['./etape-production.component.scss']
})
export class EtapeProductionComponent implements OnInit {
listEtape: any ;
  constructor(private  etapeService: EtapeProductionServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getLisEtape();

  }

  updateEtape(myObj: any) {
    this.router.navigate(['/update-etape-production' + '/' + myObj['id']]);
  }

   getLisEtape() {
    this.etapeService.getLisEtape().subscribe((data: any) => {
      this.listEtape = data;
      console.warn('*---**', this.listEtape);
    });
  }

  delete(id: any) {
    this.etapeService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines();
        this.router.navigate(['/etape-production']);
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListachines() {
    this.etapeService.getLisEtape().subscribe(
      response => {
        this.listEtape = response;      }
    );
  }

}
