import { Component, OnInit } from '@angular/core';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
import {Router} from '@angular/router';
export class EtapeProduction {
  id: any;
  nomEtape: any;
  typeEtape: any;

}
@Component({
  selector: 'app-ajouter-etape',
  templateUrl: './ajouter-etape.component.html',
  styleUrls: ['./ajouter-etape.component.scss']
})
export class AjouterEtapeComponent implements OnInit {
etape: EtapeProduction;
  constructor(private route: Router, private etapeProduction: EtapeProductionServiceService) {
    this.etape = new EtapeProduction();
  }

  ngOnInit(): void {
  }
  ajoutEtape() {
    const f: FormData = new FormData();
    f.append('nomEtape', this.etape.nomEtape);
    f.append('typeEtape', this.etape.typeEtape);
    this.etapeProduction.ajoutEtape(f).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/etape-production']);
      },
      err => {
        console.log(err);

      }
    );
  }
  // delete(id : any){
  //
  // }

}
