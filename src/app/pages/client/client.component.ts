import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../../services/client-service.service';
import {Router} from '@angular/router';
import {Client} from '../../model/Client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
listClient: any;
dataClient: Client [];
  constructor(private  clientService: ClientServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.getListClient();
  }
  getListClient() {
    this.clientService.getListClient().subscribe((data: any) => {
      this.listClient = data;
      this.dataClient = this.listClient ;
      console.warn('*---**', this.listClient);
    });
  }
  addClient(data: any) {
    const f: FormData = new FormData();
    f.append('nom', data.data.nom);
    f.append('reference', data.data.reference);
    f.append('country', data.data.country);
    f.append('address', data.data.address);
    f.append('company', data.data.company);
    f.append('email', data.data.email);
    f.append('phone', data.data.phone);

    this.clientService.ajouterClient(f).subscribe(
      (res) => {
        console.log(res);
this.refreshListClient();
},
      err => {
        console.log(err);

      }
    );
  }
  articleClient(myObj: any) {
    this.router.navigate(['/article-client' + '/' + myObj['nom'] + '/' + myObj['id']]);
  }

  updateClient(data: any) {
    const f: FormData = new FormData();
    f.append('nom', data.data.nom);
    f.append('reference', data.data.reference);
    f.append('country', data.data.country);
    f.append('address', data.data.address);
    f.append('company', data.data.company);
    f.append('email', data.data.email);
    f.append('phone', data.data.phone);

    this.clientService.updateClient(data.data.id, f).subscribe(
      (res) => {
        console.log(res);
this.refreshListClient();
},
      err => {
        console.log(err);

      }
    );  }

  delete(data: any) {
    this.clientService.delete(data.data.id).subscribe(
      (res) => {
        console.log(res);
this.refreshListClient();
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListClient() {
    this.clientService.getListClient().subscribe(
      response => {
        this.listClient = response;
      this.dataClient = this.listClient ;
      }
    );
  }
}
