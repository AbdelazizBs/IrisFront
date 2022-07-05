import { Component, OnInit } from '@angular/core';
import {Client} from '../user-profile/user-profile.component';
import {CommandeServiceService} from '../../services/commande-service.service';

// export class Commande {
//   id: number;
//   dateCmd: any ;
//   numCmd: any ;
//   typeCmd: any ;
//   clientId: any ;
//   accepted: any ;
// }
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  constructor(private  commandeService: CommandeServiceService) {
  //  this.commande = new Commande();
    this.getMyListCommandes();

  }
validate: any ;
  clientId: any;
  listCommande: any ;
 // commande : Commande ;
  ngOnInit(): void {
//     this.id = localStorage.getItem('id');
//     this.commandeService.getMyListCommandes(this.id).subscribe(data => {
//       // console.log(data.body)
//       const cmd = data.body;
//       this.listCommande = [];
//
//       for (let i = 0; i < cmd.length; i++) {
//         this.listCommande.push(cmd[i]);
//
//       }
//
// });
  }
  getMyListCommandes() {
    this.clientId =  localStorage.getItem('id');
    console.warn('*---**', this.clientId);
    if (this.clientId) {
      this.commandeService.getMyListCommandes( this.clientId).subscribe((data: any) => {
        this.listCommande = data;
        console.warn('*---**', this.listCommande);
        for (let i = 0; i < data.length; i++) {
          if (data.accepted === true) {
            this.validate = 'accepted';
          }
        }
      });
    }
  }
}
