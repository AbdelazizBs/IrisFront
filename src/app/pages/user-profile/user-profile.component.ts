import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../../services/client-service.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  dateNaissance: Date ;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  constructor(private  clientService: ClientServiceService , private route: Router) {
  // this.personnel = new Personnel();
  }

id: any ;
response: any ;
  // personnel: Personnel ;
  cin : any ;
  firstName: any ;
  lastName: any ;
  company: any ;
  address: any ;
  country: any ;
  login: any ;
  password: any ;
  phone: any ;
  genre: any ;
  dateNaissance: any ;
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

    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.clientService.getPersonnelById(this.id).subscribe(      (res) => {
        console.log(res);
        this.response = res,
          // this.personnel = this.response;
          this.id = this.response.id;
          this.cin = this.response.cin;
        this.firstName = this.response.firstName;
        this.lastName = this.response.lastName;
        this.company = this.response.company;
        this.address = this.response.address;
        this.country = this.response.country;
        this.password = this.response.password;
        this.phone = this.response.phone;
        this.genre = this.response.genre;
        this.dateNaissance = this.response.dateNaissance;

        console.log(this.cin); },
      (err) => {
        console.log(err);
      }
    );
  }

  update() {
    const f = new FormData();
    // f.append('address', this.client.address);
    // f.append('firstName', this.client.firstName);
    // f.append('lastName', this.client.lastName);
    // f.append('country', this.client.country);
    // f.append('company', this.client.company);
    // f.append('email', this.client.email);
    // f.append('password', this.client.password);
    // f.append('phone', this.client.phone);


    // if (this.image) {
    //   f.append('image', this.image); } else {
    //   f.append('image', this.actuality.image);
    //
    // }
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
