import { Component, OnInit } from '@angular/core';
import {Client} from '../user-profile/user-profile.component';
import {CommandeServiceService} from '../../services/commande-service.service';
import {Router} from '@angular/router';

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

  constructor(private  commandeService: CommandeServiceService, private router: Router) {
  //  this.commande = new Commande();
    this.getListCommandes();

  }
validate: any ;
  id: any;
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


  getListCommandes() {
    // this.clientId =  localStorage.getItem('id');
    // console.warn('*---**', this.clientId);
    // if (this.clientId) {
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


  refreshLisCommandes() {
    this.commandeService.getListCommandes().subscribe(
      response => {
        this.listCommande = response;      }
    );
  }

}
