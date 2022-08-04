import { Component, OnInit } from '@angular/core';
import {Commande} from '../ordre-fabrication/ordre-fabrication.component';
import {CommandeServiceService} from '../../services/commande-service.service';
import {ClientServiceService} from '../../services/client-service.service';
import {ArticleServiceService} from '../../services/article-service.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ajouter-commande',
  templateUrl: './ajouter-commande.component.html',
  styleUrls: ['./ajouter-commande.component.scss']
})
export class AjouterCommandeComponent implements OnInit {
commande: Commande ;
  refIriss: any ;
  nomClients: any ;
  response: any ;
  // tslint:disable-next-line:max-line-length
  constructor(private articleService: ArticleServiceService, private route: Router, private clientService: ClientServiceService, private datepipe: DatePipe
              , private commandeService: CommandeServiceService) {
    this.commande = new Commande();
  }

  ngOnInit(): void {

    this.articleService.refIris().subscribe(response => {
        console.log(response);
        this.response = response;
          this.refIriss = this.response;
     },
      (err) => {
        console.log(err);
      }
    );
    this.clientService.getNomClients().subscribe(response => {
        console.log(response);
        this.response = response;
          this.nomClients = this.response;
      },
      (err) => {
        console.log(err);
      }
    );

  }

  ajoutCommande() {
    const f: FormData = new FormData();
    f.append('articles', '');
    f.append('dateCmd', this.datepipe.transform(this.commande.dateCmd, 'yyyy/MM/dd'));
    f.append('nomClient', this.commande.nomClient);
    f.append('typeCmd', this.commande.typeCmd);
    f.append('numCmd', this.commande.numCmd);
    this.commandeService.ajoutCommande(f).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/commande']);
      },
      err => {
        console.log(err);

      }
    );
  }

}
