import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-commande',
  templateUrl: './article-commande.component.html',
  styleUrls: ['./article-commande.component.scss']
})
export class ArticleCommandeComponent implements OnInit {

  listArticle: any ;
  numCmd: any ;
  idCmd: any;
  nomClient: any;
  id: any;
  constructor(private  articleService: ArticleServiceService, private router: Router,  private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.nomClient = params.get('nomClient');
        this.idCmd = params.get('idCmd');
        this.numCmd = params.get('numCmd');
      }
    );
    this.getListArticleClientByNomClient();

  }

  ajouterAcmd(idArticle: any) {
    this.articleService.ajouterAcmd(idArticle, this.idCmd).subscribe(
      (res) => {
        console.log(res);
        console.log(this.idCmd);
        this.refreshListachines();
      },
      err => {
        console.log(err);

      }
    );
  }
  getListArticleClientByNomClient() {
    this.articleService.getListArticleClientByNomClient(this.nomClient).subscribe((data: any) => {
      this.listArticle = data;
      console.warn('listArticle', this.listArticle);
    });
  }



  // delete(id: any) {
  //   this.articleService.delete(id).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.refreshListachines();
  //       this.router.navigate(['/article-commande/' + this.idClient]);
  //     },
  //     err => {
  //       console.log(err);
  //
  //     }
  //   );
  // }
  refreshListachines() {
    this.articleService.getListArticleClientByNomClient(this.nomClient).subscribe(
      response => {
        this.listArticle = response;      }
    );
  }

}
