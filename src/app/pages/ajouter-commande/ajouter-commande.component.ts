import { Component, OnInit } from '@angular/core';
import {Article} from '../ajouter-article/ajouter-article.component';
import {Commande} from '../ordre-fabrication/ordre-fabrication.component';

@Component({
  selector: 'app-ajouter-commande',
  templateUrl: './ajouter-commande.component.html',
  styleUrls: ['./ajouter-commande.component.scss']
})
export class AjouterCommandeComponent implements OnInit {
commande: Commande ;
  codeArticles:any ;
  constructor() {
    this.commande = new Commande();
  }

  ngOnInit(): void {
  }

}
