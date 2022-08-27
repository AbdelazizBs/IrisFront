import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import {ClientServiceService} from '../../services/client-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-non-liee',
  templateUrl: './article-non-liee.component.html',
  styleUrls: ['./article-non-liee.component.scss']
})
export class ArticleNonLieeComponent implements OnInit {

  listArticleNonLiee: any ;
  listClient: any ;
  optionClient = 'selectionner un client';
  id: any;
  displayStyle = 'none';
  response: any;
  refArticle: any;
  clientName = '';
  constructor(private  articleService: ArticleServiceService, private clientService: ClientServiceService , private router: Router) { }
  ngOnInit(): void {
    this.getListArticlesNonLiee();
    this.getListClient();

  }
  onSelected(value: string): void {
    this.clientName = value;
    console.log(this.clientName);
  }
  updateArticle(myObj: any) {
    this.router.navigate(['/update-article' + '/' + myObj['id']]);
  }
  openPopup(article: any) {
    this.displayStyle = 'block';
    console.log(article);
    this.refArticle = article.refIris;
    this.id = article.id;
  }
  addToClient(nomClient: any) {
    console.log(nomClient);
    console.log(this.id);
   if (!nomClient || nomClient === this.optionClient) {
      nomClient = 'NoClient';
    }
    this.articleService.addToClient(this.id, nomClient).subscribe((response: any) => {
      console.log(response);
this.refreshListachines();
this.closePopup();
},
      (err) => {
        console.log(err);
      }
    );
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  getListArticlesNonLiee() {
    this.articleService.getListArticlesNonLiee().subscribe((data: any) => {
      this.listArticleNonLiee = data;
      console.warn('listArticle', this.listArticleNonLiee);
    });
  }
  getListClient() {
    this.clientService.getNomClients().subscribe((data: any) => {
      this.listClient = data;
      console.warn('listClient', this.listClient);
    } );
  }
  refreshListachines() {
    this.articleService.getListArticlesNonLiee().subscribe(
      response => {
        this.listArticleNonLiee = response;      }
    );
  }
}
