import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from '../../services/client-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private  clientService: ClientServiceService , private route: Router) { }

id: any ;
response: any ;
  client = {
    firstName:  '',
    lastName: '',
    company: '',
    address: '',
    country:  '',
    email: '',
    password: '',
    phone: ''
  };
  ngOnInit() {

    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.clientService.getById(this.id).subscribe(      (res) => {
        console.log(res);
        this.response = res,
          this.client = this.response; },
      (err) => {
        console.log(err);

      }
    );
  }

  update() {
    const f = new FormData();
    f.append('address', this.client.address);
    f.append('firstName', this.client.firstName);
    f.append('lastName', this.client.lastName);
    f.append('country', this.client.country);
    f.append('company', this.client.company);
    f.append('email', this.client.email);
    f.append('password', this.client.password);
    f.append('phone', this.client.phone);


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
