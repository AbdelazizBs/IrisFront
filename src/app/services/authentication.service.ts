import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {EmailValidator} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(login: any, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Basic' + btoa('pfa' + ':' + '123') }),
    };
    // tslint:disable-next-line:prefer-const
    const formData: any = new FormData();
    formData.append('login', login);
    formData.append('password', password);
    // let headers=new HttpHeaders({'Authorization':'Basic' + btoa("pfa" + ':' + "123") });
    return this.httpClient.post( 'http://127.0.0.1:8080/personnel/login' , formData);
  }




  // authenticate(email: EmailValidator, password: string): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({'Authorization': 'Basic' + btoa('pfa' + ':' + '123') }),
  //   };
  //   // tslint:disable-next-line:prefer-const
  //   const formData: any = new FormData();
  //   formData.append('email', email);
  //   formData.append('password', password);
  //   // let headers=new HttpHeaders({'Authorization':'Basic' + btoa("pfa" + ':' + "123") });
  //   return this.httpClient.post( 'http://127.0.0.1:8080/client/login' , formData);
  // }

 /* authenticate(email, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    return this.httpClient.post('http://localhost:8080/client/login', { headers }).pipe
    (
      map(
        userData => {
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('password', password);
          console.log(email + ' ' + password);
          return userData;
        }
      )
    );*/


  isUserLoggedIn() {
    const user = localStorage.getItem('email');
    console.log(!(user === null));
    return !(user === null);
  }
  logOut() {
    localStorage.clear();
    console.log('clear storage');
  }


}
