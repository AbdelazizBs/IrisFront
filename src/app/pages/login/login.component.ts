import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {EmailValidator} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  email: EmailValidator;
  password: string;
  invalidLogin = false;

  successMessage = 'Authentication success';
  errorMessage = 'Invalide username or password';
  constructor(private router: Router, private loginservice: AuthenticationService) {  }


  checkLogin() {
    this.loginservice.authenticate(this.email, this.password).subscribe(
        data => {
          localStorage.setItem('email', data.email);
          localStorage.setItem('id', data.id);
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




  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
