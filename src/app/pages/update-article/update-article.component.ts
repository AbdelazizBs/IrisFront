import { Component, OnInit } from '@angular/core';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
import {MachineServiceService} from '../../services/machine-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Machine} from '../update-machine/update-machine.component';
import {ArticleServiceService} from '../../services/article-service.service';
export class Article {
  id: any;
  codeArticle: any;
  designation: any;
  nomEtapeProductions: any;

}
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {
  idArticle: any;
article: Article ;
  nomEtapes: any[];
  response: any ;
  codeArticles: any;
  constructor(private articleService: ArticleServiceService , private etapeProductionService: EtapeProductionServiceService , private router: Router,  private route: ActivatedRoute) {
    this.article = new Article();

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        this.idArticle = params.get('id');
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

  this.articleService.getArticleById(this.idArticle).subscribe(response => {
  console.log(response);
  this.response = response,
  this.article = this.response;
  console.log(this.article); },
(err) => {
  console.log(err);

});


    this.articleService.getArticleByCodeArticles(this.codeArticles).subscribe(response => {
        console.log(response);
        this.response = response,
          this.article = this.response;
        console.log(this.article); },
      (err) => {
        console.log(err);

      });
  }



  updateArticle() {
    const f: FormData = new FormData();
    f.append('codeArticle', this.article.codeArticle);
    f.append('designation', this.article.designation);
    f.append('nomEtapeProductions', this.article.nomEtapeProductions);
    this.articleService.updateArticle(this.idArticle, f).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['article']);
      }
    );
  }

}
