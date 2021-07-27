import { Company } from './../_models/company';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  getCompany(name:any): Observable<Company>{
    const url = `${environment.apiUrl}/Company/GetCompany?name=${name}`;
    return this.http.get<Company>(url);
  }
}
