import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CartItem } from '../_models/cartItem';
import { Customer } from '../_models/customer';
import { CurrentCompanyService } from './current-company.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  constructor(private http: HttpClient,private currCompany:CurrentCompanyService) { }
 
  GetCustomer(customerId:number):Observable<Customer>{
    const url = `${environment.apiUrl}/Customer/GetCustomerOrders?customerId=${customerId}`;
    return this.http.get<Customer>(url,this.currCompany.GetBaseHeader());
  }
}
