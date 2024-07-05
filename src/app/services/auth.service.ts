import { Injectable } from '@angular/core';

import { GenericHttpService } from './generic-http.service';
import { LoginResponseModel } from '../model/login-response.model';
import { LoginModel } from '../model/login.model';
import { RegisterModel } from '../model/register.model';
import { jwtDecode } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private tokenKey = 'authToken';

  constructor(
    private _http: GenericHttpService
  ) { }
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getUserIdFromToken(): number | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.userId; // Token'ın payload kısmında userId olması gerekiyor
    }
    return null;
  }

  login(model:LoginModel, callBack: (res:LoginResponseModel)=> void){
    this._http.post<LoginResponseModel>("auths/login",model,res=>  callBack(res));
  }

  register(model:RegisterModel, callBack: (res:LoginResponseModel)=> void){
    this._http.post<LoginResponseModel>("auths/register",model, res=> callBack(res));
  }
}