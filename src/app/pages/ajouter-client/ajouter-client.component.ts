import { Component, OnInit } from '@angular/core';
import {Client} from '../user-profile/user-profile.component';
import {ClientServiceService} from '../../services/client-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.scss']
})
export class AjouterClientComponent implements OnInit {
client: Client;
  constructor( private route: Router, private clientService: ClientServiceService) {
    this.client = new Client();
  }

  ngOnInit(): void {
  }
  ajouterClient() {
    const f: FormData = new FormData();
    f.append('nom', this.client.nom);
    f.append('reference', this.client.reference);
    f.append('country', this.client.country);
    f.append('address', this.client.address);
    f.append('company', this.client.company);
    f.append('email', this.client.email);
    f.append('phone', this.client.phone);

    this.clientService.ajouterClient(f).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/client']);
      },
      err => {
        console.log(err);

      }
    );
  }
}
