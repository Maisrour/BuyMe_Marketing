import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/_models/cartItem';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../layout/e-shop.component.css','./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems:CartItem[];
  itemCarts$:Subscription;
  subTotal:number;
  constructor(private cartItemService:CartService,private authSerivce:AuthenticationService) { }
  ngOnDestroy(): void {
    this.itemCarts$?.unsubscribe();
    
  }

  ngOnInit(): void {
    this.initCartItems();
  }

  private initCartItems() {
    this.itemCarts$ = this.cartItemService.GetCartItems(this.authSerivce.getUser().id).subscribe(
      items => {
        this.cartItems = items;
        const total=items.map(a=>a.QTN*a.Product.DefaultSellingPrice).reduce((sum,current)=>sum+current,0);
        this.subTotal=total;
      }, err => console.log(err)
    );
  }
}
