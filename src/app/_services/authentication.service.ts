import { Register } from './../_models/register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../_models/login';
import { Token } from '../_models/token';
import jwt_decode from '../../../node_modules/jwt-decode'
import { CurrentCompanyService } from './current-company.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient,private currCompanyService:CurrentCompanyService) { }
  register(reg:Register): Observable<void>{
    const url = `${environment.apiUrl}/Account/Register`;
    return this.http.post<void>(url,reg);
  }
  login(user:Login): Observable<any>{
    const url = `${environment.apiUrl}/Account/Login`;
    return this.http.post<string>(url,user);
  }
  isLogin():boolean{
    const token = this.currCompanyService.CurrentCompanyToken();
    if (token) {return true; }
    return false;
  }
  getUser(): Token{
    const token = this.currCompanyService.CurrentCompanyToken();
    if(token){
      const decoded: Token = jwt_decode(token);
      return decoded;
    }
    return null;
  }
}


