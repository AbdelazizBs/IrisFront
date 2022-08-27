import {Component, OnInit} from '@angular/core';
import {CommandeServiceService} from '../../services/commande-service.service';
import {Router} from '@angular/router';
import {ArticleServiceService} from '../../services/article-service.service';
import {OrdreFabricationServiceService} from '../../services/ordre-fabrication-service.service';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '../../app.module';
import {DatePipe} from '@angular/common';
import {Commande} from '../../model/command.model';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss'],

})
export class CommandeComponent implements OnInit {
  dataCmd: Commande[];
  constructor( public datepipe: DatePipe,
               private ordreFab: OrdreFabricationServiceService,
               private articleService: ArticleServiceService,
               private  commandeService: CommandeServiceService,
                 private router: Router) {
  }
  cmd: any;
  listArticle: any;
  validate: any ;
  id: any;
  listCommande: any ;
  typesCmd = ['Stock', 'Echantillon', 'Relance', 'Ferme'];
  ngOnInit(): void {
    this.getListCommandes();
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
          this.dataCmd = this.listCommande ;
      });
    }
    addCmd(data) {
      console.log(data);
      const f: FormData = new FormData();
      f.append('numCmd', data.data.numCmd);
      f.append('typeCmd', data.data.typeCmd);
      f.append('dateCmd',  this.datepipe.transform(data.data.dateCmd , 'yyyy/MM/dd'));
      f.append('nomClient', data.data.nomClient);
      !data.data.articles ?  f.append('articles', '') : f.append('articles', data.data.articles);
      this.commandeService.ajoutCommande(f).subscribe(
        response => {
          console.log(response);
          this.refreshLisCommandes();
        }
      );
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
  delete(data: any) {
    this.commandeService.delete(data.data.id).subscribe(
      (res) => {
        console.log(res);
        this.refreshLisCommandes();
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
  updateCmd(data: any) {
    console.log(data);
    const f: FormData = new FormData();
    // data.newData.typeCmd = undefined ? f.append('typeCmd', data.oldData.typeCmd) : f.append('typeCmd', data.newData.typeCmd);
    // data.newData.numCmd = undefined ? f.append('numCmd', data.oldData.numCmd) : f.append('numCmd', data.newData.numCmd);
    // data.newData.dateCmd = undefined ?   f.append('dateCmd',  this.datepipe.transform(data.oldData.dateCmd , 'yyyy/MM/dd')) :   f.append('dateCmd',  this.datepipe.transform(data.newData.dateCmd , 'yyyy/MM/dd'));
    // data.newData.nomClient = undefined ? f.append('nomClient', data.oldData.nomClient) : f.append('nomClient', data.newData.nomClient);
    // data.newData.articles = undefined ? f.append('articles', data.oldData.articles) : f.append('articles', data.newData.articles);
    //
    f.append('numCmd', data.data.numCmd);
    f.append('typeCmd', data.data.typeCmd);
    f.append('dateCmd',  this.datepipe.transform(data.data.dateCmd , 'yyyy/MM/dd'));
    f.append('nomClient', data.data.nomClient);
    if (!data.data.articles) {
      f.append('articles', '');
    } else {
      f.append('articles', data.data.articles);
    }
    this.commandeService.updateCmd(data.data.id, f).subscribe(
      response => {
        console.log(response);
        this.refreshLisCommandes();
      }
    );
  }
  haveOf(idArticle: any) {
    return this.ordreFab.articlehaveOf(idArticle);
  }
  of(idArticle: any) {
    console.log(this.haveOf(idArticle));
    if (this.ordreFab.articlehaveOf(idArticle)) {
      this.router.navigate(['/update-ordre-fabrication', idArticle]);
    }
    this.router.navigate(['/ordre-fabrication' + '/' + idArticle]);
  }

}
platformBrowserDynamic().bootstrapModule(AppModule);
