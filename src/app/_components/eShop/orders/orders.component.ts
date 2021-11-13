import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalesOrder } from 'src/app/_models/salesOrder';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { OrderService } from 'src/app/_services/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../layout/e-shop.component.css','./orders.component.css']
})
export class OrdersComponent implements OnInit ,OnDestroy{
  orders$:Subscription;
  orders:SalesOrder[];
  baseUrl:string=environment.baseImageUrl;
  constructor(private orderService:OrderService,private authSerivce:AuthenticationService) { }
  ngOnDestroy(): void {
    this.orders$.unsubscribe();
  }
  ngOnInit(): void {
   this.orders$=this.orderService.getOrders(this.authSerivce.getUser().id)
   .subscribe(a=>{this.orders=a;console.log(a)},err=>console.log(err));
  }

}
