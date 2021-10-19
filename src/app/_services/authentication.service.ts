import { Register } from './../_models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../_models/login';
import { Token } from '../_models/token';
import jwt_decode from '../../../node_modules/jwt-decode'
import { CurrentCompanyService } from './current-company.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private currCompanyService:CurrentCompanyService) { }
  register(reg:Register): Observable<void>{
    const url = `${environment.apiUrl}/Account/Register`;
    const header=new HttpHeaders({'tenant':this.currCompanyService.CurrentTenant()});
    return this.http.post<void>(url,reg,{headers:header});
  }
  login(user:Login): Observable<any>{
    const url = `${environment.apiUrl}/Account/Login`;
    const header=new HttpHeaders({'tenant':this.currCompanyService.CurrentTenant()});
    return this.http.post<string>(url,user,{headers:header});
  }

  getUser(): Token{
    const token = this.currCompanyService.CurrentCompanyToken();
    if(token){
      const decoded: Token = jwt_decode(token);
      return decoded;
    }
    return null;
  }
  isAuthenticated():boolean{
    const token = this.currCompanyService.CurrentCompanyToken();
    const jwtHelper=new JwtHelperService();
    if(token){
       return !jwtHelper.isTokenExpired(token);
    }
    return false;
  }
}


