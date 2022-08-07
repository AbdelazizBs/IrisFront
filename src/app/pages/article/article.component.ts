import { Component, OnInit } from '@angular/core';
import {PersonnelServiceService} from '../../services/personnel-service.service';
import {Router} from '@angular/router';
import {ArticleServiceService} from '../../services/article-service.service';
import {ClientServiceService} from '../../services/client-service.service';
import {Article} from '../update-article/update-article.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  listArticle: any ;
  id: any;
  response: any;
  constructor(private  articleService: ArticleServiceService, private clientService: ClientServiceService , private router: Router) { }

  ngOnInit(): void {
    this.getListArticle();
  }
  updateArticle(myObj: any) {
    this.router.navigate(['/update-article' + '/' + myObj['id']]);
  }
  getListArticle() {
    this.articleService.getListArticles().subscribe((data: any) => {
      this.listArticle = data;
      console.warn('listArticle', this.listArticle);
    });
  }
  delete(id: any) {
    this.articleService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines();
        this.router.navigate(['/article']);
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
