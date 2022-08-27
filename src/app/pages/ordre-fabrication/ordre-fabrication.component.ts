import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
import {CommandeServiceService} from '../../services/commande-service.service';
import {DatePipe} from '@angular/common';
import {OrdreFabricationServiceService} from '../../services/ordre-fabrication-service.service';
import {OrdreFabrication} from '../../model/OrdreFabrication.model';
import {Article} from '../../model/Article.model';

@Component({
  selector: 'app-ordre-fabrication',
  templateUrl: './ordre-fabrication.component.html',
  styleUrls: ['./ordre-fabrication.component.scss']
})
export class OrdreFabricationComponent implements OnInit {
  idArticle: any;
  article: Article;
  response: any;
  nomEtapes: any[];
  of: OrdreFabrication;
  // tslint:disable-next-line:max-line-length
  constructor(private   datepipe: DatePipe ,
              private ordreFabricationService: OrdreFabricationServiceService  ,
              private articleService: ArticleServiceService,
              private etapeProductionService: EtapeProductionServiceService,
              private router: Router, private route: ActivatedRoute) {
    this.article = new Article();
    this.of = new OrdreFabrication();

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.idArticle = params.get('idArticle');
      }
    );
    this.etapeProductionService.getNomEtapes().subscribe(response => {
        console.log(response);
        this.response = response,
          this.nomEtapes = this.response;
        console.log(this.article);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // ken article andou of temchi l update of si nn temchi tamallou of ;
  lancerOf() {
    const f: FormData = new FormData();
    f.append('dateLancement', this.datepipe.transform( this.of.dateLancement, 'yyyy/MM/dd'));
    f.append('debutHeure', this.of.debutHeure);
    f.append('finHeure', this.of.finHeure);
    f.append('commentaire', this.of.commentaire);
    f.append('qtePremierChoix', this.of.qtePremierChoix);
    f.append('qteNonConforme', this.of.qteNonConforme);
    f.append('idArticle', this.idArticle);

    this.ordreFabricationService.addOf(f).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['commande']);
      }
    );
  }
}



