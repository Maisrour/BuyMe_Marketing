import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentCompanyService  {
  CompanyName:string;
  constructor() {
     this.CompanyName=window.location.pathname.split('/')[1];
  }
  CurrentCompanyName():string{
     return localStorage.getItem(`CompanyName_${this.CompanyName}`);
  }
  CurrentCompanyToken():string{
    return localStorage.getItem(`auth_token_${this.CompanyName}`);
  }
  CurrentCompanyId():number{
     return +localStorage.getItem(`CompanyId_${this.CompanyName}`);
  }
  CurrentTenant():string{
    return localStorage.getItem(`tenant_${this.CompanyName}`);
  }
  GetBaseHeader(){
    const  options = {
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.CurrentCompanyToken()}`)
      .set('tenant',this.CurrentTenant())
    };
    return options;
  }
}
