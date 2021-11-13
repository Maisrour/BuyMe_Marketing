import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SalesOrder } from '../_models/salesOrder';
import { CurrentCompanyService } from './current-company.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,private currCompany:CurrentCompanyService) { }
  getOrders(customerId:number): Observable<SalesOrder[]>{
    const url = `${environment.apiUrl}/Order/GetCustomerOrders?customerId=${customerId}`;
    return this.http.get<SalesOrder[]>(url,this.currCompany.GetBaseHeader());
  }
}
