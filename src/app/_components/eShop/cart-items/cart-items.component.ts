import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/_models/cartItem';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CartService } from 'src/app/_services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['../layout/e-shop.component.css','./cart-items.component.css']
})
export class CartItemsComponent implements OnInit ,OnDestroy {
  cartItems:CartItem[];
  itemCarts$:Subscription;
  cartShopping$:Subscription;
  deleteCart$:Subscription;
  baseUrl:string=environment.baseImageUrl;
  constructor(private cartItemService:CartService,private authSerivce:AuthenticationService) { }
  ngOnDestroy(): void {
    this.itemCarts$?.unsubscribe();
    this.cartShopping$?.unsubscribe();
    
  }

  ngOnInit(): void {
    this.initCartItems();
    this.refreshCartItems();
  }
  private refreshCartItems() {
    this.cartShopping$= this.cartItemService.CartShoppingStatus().subscribe(a => this.initCartItems());
  }

  private initCartItems() {
    this.itemCarts$ = this.cartItemService.GetCartItems(this.authSerivce.getUser().id).subscribe(
      a => this.cartItems = a, err => console.log(err)
    );
  }

  deleteCartItem(cartItemId:number){
    this.deleteCart$=this.cartItemService.DeleteCartItem(cartItemId)
    .subscribe(a=>{this.cartItems=this.cartItems.filter(a=>a.Id!=cartItemId);
      this.cartItemService.UpdateCartStatus()},
    err=>console.log(err));
  }
  checkout(){
    console.log(this.cartItems);
  }
}
