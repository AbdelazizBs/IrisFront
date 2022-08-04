import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
import {CommandeServiceService} from '../../services/commande-service.service';
export class Commande {
  id: number;
  dateCmd: any ;
  numCmd: any ;
  typeCmd: any ;
  nomClient: any ;
  articles: any;
  accepted: any ;
}
@Component({
  selector: 'app-ordre-fabrication',
  templateUrl: './ordre-fabrication.component.html',
  styleUrls: ['./ordre-fabrication.component.scss']
})
export class OrdreFabricationComponent implements OnInit {
    listArticle: any;
  response: any;
  nomEtapes: any[];
  idCmd: any;
  cmd: Commande;

  // tslint:disable-next-line:max-line-length
  constructor(private etapeProductionService: EtapeProductionServiceService, private commandService: CommandeServiceService, private articleService: ArticleServiceService, private router: Router, private route: ActivatedRoute) {
    this.cmd = new Commande();
  }

  ngOnInit(): void {
    // this.getListArticleCmd();

    this.route.paramMap.subscribe(
      params => {
        this.idCmd = params.get('id');
      }
    );

    this.etapeProductionService.getNomEtapes().subscribe(response => {
        console.log(response);
        this.response = response;
          this.nomEtapes = this.response;
      },
      (err) => {
        console.log(err);
      }
    );
    this.commandService.getCmdById(this.idCmd).subscribe(response => {
        console.log(response);
        this.response = response;
          this.cmd = this.response;
        this.listArticle = this.cmd.articles ;
        console.log(this.cmd); },
      (err) => {
        console.log(err);
      });

  }
  of(codeArticle: any) {
    this.router.navigate(['/update-ordre-fabrication' + '/' + codeArticle]);
  }
  articleClient(nomClient: any, id: any) {
    this.router.navigate(['/article-commande' + '/' + id + '/' + nomClient + '/' + this.cmd.numCmd]);
  }

}



