import {Component, ElementRef, OnInit} from '@angular/core';
import {CommandeServiceService} from '../../services/commande-service.service';
import {Router} from '@angular/router';
import {ArticleServiceService} from '../../services/article-service.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss'],
})
export class CommandeComponent implements OnInit {
  constructor(private articleService: ArticleServiceService, private  commandeService: CommandeServiceService, private router: Router) {
    this.getListCommandes();
  }
  cmd: any;
  listArticle: any;
  validate: any ;
  id: any;
  listCommande: any ;
  ngOnInit(): void {
  }
  getArticlesByIdCommande(index, idCmd) {
    this.articleService.getArticlesByIdCommande(idCmd).subscribe(response => {
      this.listArticle = response;
        console.log(this.listArticle);
            },
      (err) => {
        console.log(err);
      });
  }
  getListCommandes() {
      this.commandeService.getListCommandes().subscribe((data: any) => {
        this.listCommande = data;
        console.warn('*---**', this.listCommande);
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].accepted);
          if (data[i].accepted === true) {
            this.validate = 'Accepted';
          } else {
            this.validate = 'Rejected';
          }
        }
      });
    }
  inverse(cmd: any) {
    const f: FormData = new FormData();
    this.commandeService.inverse(cmd['id'], f).subscribe(
      response => {
        console.log(response);
        this.refreshLisCommandes();
      }
    );
  }
  delete(id: any) {
    this.commandeService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.refreshLisCommandes();
        this.router.navigate(['/commmande']);
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshLisCommandes() {
    this.commandeService.getListCommandes().subscribe(
      response => {
        this.listCommande = response;      }
    );
  }
  updateCmd(myObj: any) {
    this.router.navigate(['/ordre-fabrication' + '/' + myObj['id']]);
  }
  show(i: number, idCmd) {
   const arr = [];
    for (let j = 0; j < this.listCommande.length; j++) {
const htmlElement = document.getElementById('nested_table' + j);
if (i === j) { continue; }
arr.push(htmlElement);
    }
arr.map(element => {
  element.style.display = 'none';
});


    const elem = document.getElementById('nested_table' + i);
      elem.style.display === 'none' ? elem.style.display = 'block' : elem.style.display = 'none';
      this.getArticlesByIdCommande(i, idCmd);
  }
}
