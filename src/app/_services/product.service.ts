import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductCategory } from '../_models/productCategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getCategories(companyName:any): Observable<ProductCategory[]>{
    const url = `${environment.apiUrl}/Category/GetCategories?companyName=${companyName}`;
    return this.http.get<ProductCategory[]>(url);
  }
}
