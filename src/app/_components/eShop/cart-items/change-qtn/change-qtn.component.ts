import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/_models/cartItem';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-change-qtn',
  templateUrl: './change-qtn.component.html',
  styleUrls: ['../../layout/e-shop.component.css','./change-qtn.component.css']
})
export class ChangeQTNComponent implements OnInit ,OnDestroy{

  @Input() itemCart:CartItem;
  $increase:Subscription;
  $decrease:Subscription;
  constructor(private cartService:CartService) { }
  ngOnDestroy(): void {
    this.$increase?.unsubscribe();
    this.$decrease?.unsubscribe();
  }

  ngOnInit(): void {
  }
  increaseQTN(){
    this.itemCart.QTN+=1;
    this.$increase=this.cartService.UpsertCartItem(this.itemCart).subscribe(a=>this.cartService.UpdateCartStatus(),
    err=>console.log(err));
  }
  decreaseQTN(){
    if(this.itemCart.QTN>1){
       this.itemCart.QTN-=1;
       this.$decrease=this.cartService.UpsertCartItem(this.itemCart).subscribe(a=>this.cartService.UpdateCartStatus(),
       err=>console.log(err));
    }
   
  }
}
