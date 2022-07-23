import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../update-article/update-article.component';
import {OrdreFabricationServiceService} from '../../services/ordre-fabrication-service.service';
import {DatePipe} from '@angular/common';
export class OrdreFabrication {
  id: any;
  dateLancement: any;
  debutHeure: any;
  finHeure: any;
  commentaire: any;
  qtePremierChoix: any;
  qteNonConforme: any;
  codeArticle: any ;
}
@Component({
  selector: 'app-update-ordre-fabrication',
  templateUrl: './update-ordre-fabrication.component.html',
  styleUrls: ['./update-ordre-fabrication.component.scss']
})
export class UpdateOrdreFabricationComponent implements OnInit {
  codeArticles: any;
  article: Article;
  response: any;
  nomEtapes: any[];
of: OrdreFabrication;
  // tslint:disable-next-line:max-line-length
  constructor(private   datepipe: DatePipe , private ordreFabricationService: OrdreFabricationServiceService  , private articleService: ArticleServiceService, private etapeProductionService: EtapeProductionServiceService, private router: Router, private route: ActivatedRoute) {
    this.article = new Article();
    this.of = new OrdreFabrication();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.codeArticles = params.get('codeArticle');
      }
    );
    this.etapeProductionService.getNomEtapes().subscribe(response => {
        console.log(response);
        this.response = response,
          this.nomEtapes = this.response;
        console.log(this.article); },
      (err) => {
        console.log(err);
      }
    );

    this.articleService.getArticleByCodeArticles(this.codeArticles).subscribe(response => {
        console.log(response);
        this.response = response,
          this.article = this.response;
        console.log(this.article);
      },
      (err) => {
        console.log(err);

      });
  }

  lancerOf() {
    const f: FormData = new FormData();
    f.append('dateLancement', this.datepipe.transform( this.of.dateLancement, 'yyyy/MM/dd'));
    f.append('debutHeure', this.of.debutHeure);
    f.append('finHeure', this.of.finHeure);
    f.append('commentaire', this.of.commentaire);
    f.append('qtePremierChoix', this.of.qtePremierChoix);
    f.append('qteNonConforme', this.of.qteNonConforme);
    f.append('codeArticles', this.article.codeArticle);

    this.ordreFabricationService.addOf(f).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['article']);
      }
    );
  }

}
