import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../../services/client-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';


export class Client {
  id: number;
  firstName: any ;
  lastName: any ;
  company: any ;
  address: any ;
  country: any ;
  email: any ;
  password: any ;
  phone: any ;

}

export class Personnel {
  id: number;
  cin: string ;
  firstName: string ;
  lastName: string ;
  company: string ;
  address: string ;
  country: string ;
  login: any ;
  password: string ;
  phone: string ;
  genre: string ;
  dateNaissance: any ;
  nomMachine: any;
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
  nomMachines: any ;
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
    this.clientService.getNomMachine().subscribe((d: any) => {
      this.nomMachines = d;
    });
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
    f.append('firstName', this.personnel.firstName);
    f.append('lastName', this.personnel.lastName);
    f.append('country', this.personnel.country);
    f.append('company', this.personnel.company);
    f.append('login', this.personnel.login);
    f.append('password', this.personnel.password);
    f.append('phone', this.personnel.phone);
    f.append('cin', this.personnel.cin);
    f.append('genre', this.personnel.genre);
    f.append('nomMachine', this.personnel.nomMachine);
    f.append('dateNaissance', this.datepipe.transform(this.personnel.dateNaissance, 'dd/MM/yyyy'));
    f.append('password', this.personnel.password);

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
