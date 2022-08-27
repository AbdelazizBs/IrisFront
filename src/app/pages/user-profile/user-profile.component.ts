import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../../services/client-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Personnel} from '../../model/Personnel.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private  clientService: ClientServiceService , private route: Router, public datepipe: DatePipe) {
  this.personnel = new Personnel();
  }
id: any ;
response: any ;
  personnel: Personnel ;
  genres = [];
  ngOnInit() {
this.genres = ['homme',
  'femme'];

    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.clientService.getPersonnelById(this.id).subscribe(      (res) => {
        console.log(res);
        this.response = res,
          this.personnel = this.response;
        console.log(this.personnel); },
      (err) => {
        console.log(err);
      }
    );
  }

  update() {
    const f: FormData = new FormData();
    f.append('address', this.personnel.address);
    f.append('name', this.personnel.name);
    f.append('country', this.personnel.country);
    f.append('company', this.personnel.company);
    f.append('email', this.personnel.compte.email);
    f.append('password', this.personnel.compte.password);
    f.append('phone', this.personnel.phone);
    f.append('cin', this.personnel.cin);
    f.append('genre', this.personnel.genre);
    // f.append('nomMachine', this.personnel.nomMachine);
    f.append('dateNaissance', this.datepipe.transform(this.personnel.dateNaissance, 'dd/MM/yyyy'));

    this.clientService.update(this.id, f).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/user-profile']);
      },
      err => {
        console.log(err);

      }
    );
  }

  }
