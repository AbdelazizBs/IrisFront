import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {EmailValidator} from '@angular/forms';
//
// export class Client {
//   id: number;
//   firstName: any ;
//   lastName: any ;
//   company: any ;
//   address: any ;
//   country: any ;
//   email: any ;
//   password: any ;
//   phone: any ;
// }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  email: any;
  password: string;
  invalidLogin = false;
  // client: Client ;
  // response: any ;

  successMessage = 'Authentication success';
  errorMessage = 'Invalide username or password';
  constructor(private router: Router, private loginservice: AuthenticationService) {
    // this.client = new Client();
  }


  checkLoginPersonnel() {
    this.loginservice.authenticate(this.email, this.password).subscribe(
      data => {
        // this.response = data,
        //   this.client = this.response;
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data.id);
        localStorage.setItem('name', data.name);
        this.router.navigate(['dashboard']);
        this.invalidLogin = false;

        /*   localStorage.setItem('address',data.address)

     localStorage.setItem('id',data.id)*/
      },
      error => {
        this.invalidLogin = true;
      }
    );
  }


  //
  // checkLogin() {
  //   this.loginservice.authenticate(this.email, this.password).subscribe(
  //       data => {
  //         // this.response = data,
  //         //   this.client = this.response;
  //         localStorage.setItem('email', data.email);
  //         localStorage.setItem('id', data.id);
  //         localStorage.setItem('firstName', data.firstName);
  //         this.router.navigate(['dashboard']);
  //         this.invalidLogin = false;
  //
  //       /*   localStorage.setItem('address',data.address)
  //
  //    localStorage.setItem('id',data.id)*/
  //       },
  //       error => {
  //         this.invalidLogin = true;
  //       }
  //     );
  // }




  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
