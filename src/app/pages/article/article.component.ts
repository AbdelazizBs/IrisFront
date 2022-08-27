import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ArticleServiceService} from '../../services/article-service.service';
import {Article} from '../../model/Article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  listArticle: any ;
  id: any;
  response: any;
  dataArticle: Article [];
  constructor(private route: Router,
              private  articleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.getListArticle();
  }
  updateArticle(data: any) {
    const f: FormData = new FormData();
    f.append('refIris', data.data.refIris);
    f.append('refClient', data.data.refClient);
    // tslint:disable-next-line:triple-equals
    !data.data.clientName ?  f.append('clientName', '') : f.append('clientName', data.data.clientName);
    !data.data.nomEtapeProductions ? f.append('nomEtapeProductions', '') : f.append('nomEtapeProductions', data.data.nomEtapeProductions);
    !data.data.idOf ? f.append('idOf', '') : f.append('idOf', data.data.idOf);
    this.articleService.ajoutArticle(f).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines() ;
      },
      err => {
        console.log(err);

      }
    );
  }
  addArticle(data: any) {
      const f: FormData = new FormData();
      f.append('refIris', data.data.refIris);
      f.append('refClient', data.data.refClient);
      // tslint:disable-next-line:triple-equals
    !data.data.clientName ?  f.append('clientName', '') : f.append('clientName', data.data.clientName);
    !data.data.nomEtapeProductions ? f.append('nomEtapeProductions', '') : f.append('nomEtapeProductions', data.data.nomEtapeProductions);
    !data.data.idOf ? f.append('idOf', '') : f.append('idOf', data.data.idOf);
      this.articleService.ajoutArticle(f).subscribe(
        (res) => {
          console.log(res);
          this.refreshListachines() ;
        },
        err => {
          console.log(err);

        }
      );
    }


  getListArticle() {
    this.articleService.getListArticles().subscribe((data: any) => {
      this.listArticle = data;
      this.dataArticle = this.listArticle;
      console.warn('listArticle', this.listArticle);
    });
  }
  delete(data: any) {
    this.articleService.delete(data.data.id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines();
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListachines() {
    this.articleService.getListArticles().subscribe(
      response => {
        this.listArticle = response;      }
    );
  }

}
