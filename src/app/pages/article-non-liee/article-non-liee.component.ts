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
  idArticle: any;
  id: any;
  displayStyle = 'none';
  response: any;
  constructor(private  articleService: ArticleServiceService, private clientService: ClientServiceService , private router: Router) { }
  ngOnInit(): void {
    this.getListArticlesNonLiee();
    this.getListClient();

  }
  updateArticle(myObj: any) {
    this.router.navigate(['/update-article' + '/' + myObj['id']]);
  }
  openPopup(idArticle: any) {
    this.displayStyle = 'block';
    this.idArticle = idArticle;
  }
  addToClient(nomClient: any) {
    this.articleService.addToClient(this.idArticle, nomClient).subscribe((response: any) => {
        console.log(nomClient);
        console.log(this.idArticle);
        // this.open2ndPopup();
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
