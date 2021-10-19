import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../_models/cartItem';
import { CurrentCompanyService } from './current-company.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,private currCompany:CurrentCompanyService) { }
  UpsertCartItem(cartItem:CartItem): Observable<number>{
    const url = `${environment.apiUrl}/Cart/Upsert`;
    return this.http.post<number>(url,cartItem,this.currCompany.GetBaseHeader());
  }
  GetCartItems(customerId:number):Observable<CartItem[]>{
    const url = `${environment.apiUrl}/Cart/GetAll?customerId=${customerId}`;
    return this.http.get<CartItem[]>(url,this.currCompany.GetBaseHeader());
  }
  DeleteCartItem(cartItemId:number): Observable<void>{
    const url = `${environment.apiUrl}/Cart/DeleteCartItem?cartItemId=${cartItemId}`;
    return this.http.delete<void>(url,this.currCompany.GetBaseHeader());
  }
}
