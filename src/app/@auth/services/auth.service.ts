import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../componnets/forms/login.form';
import { RegisterationDTO } from '../componnets/forms/register.form';
import { Router } from '@angular/router';
import { Logger } from '../../@core/utils/logger.service';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private log = new Logger(AuthService.name);
  private baseUrl : string = environment.serverUrl + '/User/';
  private userPayload : any;
  constructor(private http : HttpClient , private router: Router) {
    this.userPayload = this.decodeToken();
  }


  login(loginOObj : LoginDTO){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginOObj);
  }

  signUp(RegisterObj: RegisterationDTO){
    return this.http.post<any>(`${this.baseUrl}register`,RegisterObj);
  }

  signOut(){
    localStorage.clear();
    //localStorage.removeItem('token');
    this.router.navigateByUrl('auth/login');
  }


  /*
   ** Token manipulation
  */
  storeToken(tokenValue : string){
    localStorage.setItem('token', tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean{

    return true;
    // return !!localStorage.getItem('token');
  }

  decodeToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken();
    this.log.info(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
  }

  getFullNameFromToken(){
    if(this.userPayload){
       return this.userPayload.name;
    }
  }
}
