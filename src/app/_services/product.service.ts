import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductCategory } from '../_models/productCategory';
import { CurrentCompanyService } from './current-company.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,private currCompany:CurrentCompanyService) { }
  getCategories(companyName:any): Observable<ProductCategory[]>{
    const url = `${environment.apiUrl}/Category/GetCategories?companyName=${companyName}`;
    const header=new HttpHeaders({'tenant':this.currCompany.CurrentTenant()});
    return this.http.get<ProductCategory[]>(url,{headers:header});
  }
}
