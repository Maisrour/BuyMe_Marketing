import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/_models/cartItem';
import { Product } from 'src/app/_models/product';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CartService } from 'src/app/_services/cart.service';
import { CurrentCompanyService } from 'src/app/_services/current-company.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['../layout/e-shop.component.css','./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit ,OnDestroy{
  baseUrl:string=environment.baseImageUrl;
  quantity:number=1;
  $subscribtion:Subscription;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product,private route:Router,private authService:AuthenticationService,private currUserService:CurrentCompanyService,private cartService:CartService) { }
  ngOnDestroy(): void {
    this.$subscribtion.unsubscribe();
  }
  
  ngOnInit(): void {
  }
  addToCart(){
    if(!this.authService.isAuthenticated()){
      this.route.navigateByUrl('login');
    }
    
   this.$subscribtion= this.cartService.UpsertCartItem(this.InitItemCart())
   .subscribe(a=>console.log('add sucess'+a),err=>console.log(err));
  }

  private InitItemCart(): CartItem {
    return {
      ProductId: this.data.ProductId, QTN: this.quantity,
      CompanyId: this.currUserService.CurrentCompanyId(), CustomerId: this.authService.getUser().id
    };
  }
}
