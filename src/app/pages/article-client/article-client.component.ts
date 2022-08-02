import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-client',
  templateUrl: './article-client.component.html',
  styleUrls: ['./article-client.component.scss']
})
export class ArticleClientComponent implements OnInit {

  listArticle: any ;
  idClient: any;
  id: any;
  constructor(private  articleService: ArticleServiceService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        this.idClient = params.get('id');
      }
    );

    this.getListArticleClient();

  }


  getListArticleClient() {
    this.articleService.getListArticleClient(this.idClient).subscribe((data: any) => {
      this.listArticle = data;
      console.warn('*---**', this.listArticle);
    });
  }

  delete(id: any) {
    this.articleService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines();
        this.router.navigate(['/article-client/' + this.idClient]);
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListachines() {
    this.articleService.getListArticleClient(this.idClient).subscribe(
      response => {
        this.listArticle = response;      }
    );
  }

}
