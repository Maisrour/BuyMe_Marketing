import { Company } from './../_models/company';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CurrentCompanyService } from './current-company.service';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  getCompany(name:string,tenant:string): Observable<Company>{
    const url = `${environment.apiUrl}/Company/GetCompany?name=${name}`;
    const header=new HttpHeaders({'tenant':tenant});
    return this.http.get<Company>(url,{headers:header});
  }
}
