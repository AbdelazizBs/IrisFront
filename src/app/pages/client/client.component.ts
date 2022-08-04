import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../../services/client-service.service';
import {Client} from '../user-profile/user-profile.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
client: Client;
listClient: any;
  constructor(private  clientService: ClientServiceService, private router: Router) {
this.client = new Client();
  }

  ngOnInit(): void {
    this.getListClient();
  }
  getListClient() {
    this.clientService.getListClient().subscribe((data: any) => {
      this.listClient = data;
      console.warn('*---**', this.listClient);
    });
  }

  articleClient(myObj: any) {
    this.router.navigate(['/article-client' + '/' + myObj['nom'] + '/' + myObj['id']]);
  }

  updateClient(myObj: any) {
    this.router.navigate(['/update-client' + '/' + myObj['id']]);
  }

  delete(id: any) {
    this.clientService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines();
        this.router.navigate(['/client']);
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListachines() {
    this.clientService.getListClient().subscribe(
      response => {
        this.listClient = response;      }
    );
  }
}
