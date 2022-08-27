import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientServiceService} from '../../services/client-service.service';
import {Client} from '../../model/Client.model';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
client: Client;
  constructor(private clientService: ClientServiceService, private router: Router,  private route: ActivatedRoute) {
    this.client = new Client();

  }
idClient: any;
  response: any ;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.idClient = params.get('id');
      }
    );
  this.clientService.getClientById(this.idClient).subscribe(response => {
  console.log(response);
  this.response = response,
  this.client = this.response;
  console.log(this.client); },
(err) => {
  console.log(err);

});
}

  updateClient() {
    const f: FormData = new FormData();
    f.append('nom', this.client.nom);
    f.append('reference', this.client.reference);
    f.append('country', this.client.country);
    f.append('address', this.client.address);
    f.append('company', this.client.company);
    f.append('email', this.client.email);
    f.append('phone', this.client.phone);
    this.clientService.updateClient(this.idClient, f).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['client']);
      }
    );
  }
}
