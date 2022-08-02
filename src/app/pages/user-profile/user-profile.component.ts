import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../../services/client-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';


export class Client {
  id: number;
  nom: any ;
  company: any ;
  address: any ;
  country: any ;
  email: any ;
  reference: any ;
  phone: any ;

}
export class Compte {
  id: number;
  email: any;
  password;
}

export class Personnel {
  id: number;
  cin: string ;
  name: string ;
  company: string ;
  address: string ;
  country: string ;
compte: Compte;
  phone: string ;
  genre: string ;
  dateNaissance: any ;
}
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
  // cin : any ;
  // firstName: any ;
  // lastName: any ;
  // company: any ;
  // address: any ;
  // country: any ;
  // login: any ;
  // password: any ;
  // phone: any ;
  // genre: any ;
  // dateNaissance: any ;
  // personnel = {
  //   cin : '',
  //   firstName:  '',
  //   lastName: '',
  //   company: '',
  //   address: '',
  //   country:  '',
  //   login: '',
  //   password: '',
  //   phone: '',
  //   genre: '',
  //   dateNaissance: ''
  // };
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
