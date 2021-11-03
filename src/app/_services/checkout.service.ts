import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../_models/customer';
import { CurrentCompanyService } from './current-company.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient,private currCompany:CurrentCompanyService) { }
  checkout(customer:Customer): Observable<number>{
    const url = `${environment.apiUrl}/Order/CheckOut`;
    return this.http.post<number>(url,customer,this.currCompany.GetBaseHeader());
  }
 
}
