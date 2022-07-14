import { Component, OnInit } from '@angular/core';
import {Article} from '../update-article/update-article.component';
import {ActivatedRoute, Router} from '@angular/router';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
export class EtapeProduction {
  id: any;
  nomEtape: any;
  typeEtape: any;

}
@Component({
  selector: 'app-update-etape-production',
  templateUrl: './update-etape-production.component.html',
  styleUrls: ['./update-etape-production.component.scss']
})
export class UpdateEtapeProductionComponent implements OnInit {
idEtape: any ;
etape: EtapeProduction ;
response: any ;
  constructor( private etapeProductionService: EtapeProductionServiceService, private router: Router,  private route: ActivatedRoute) {
    this.etape = new EtapeProduction();

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        this.idEtape = params.get('id');
      }
    );



  this.etapeProductionService.getEtapeById(this.idEtape).subscribe(response => {
  console.log(response);
  this.response = response,
  this.etape = this.response;
  console.log(this.etape); },
(err) => {
  console.log(err);

});
}

  updateEtape() {
    const f: FormData = new FormData();
    f.append('nomEtape', this.etape.nomEtape);
    f.append('typeEtape', this.etape.typeEtape);
    this.etapeProductionService.updateEtape(this.idEtape, f).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['etape-production']);
      }
    );
  }

}
