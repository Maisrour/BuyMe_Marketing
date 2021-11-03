import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/_models/cartItem';
import { Customer } from 'src/app/_models/customer';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CartService } from 'src/app/_services/cart.service';
import { CheckoutService } from 'src/app/_services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../layout/e-shop.component.css','./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems:CartItem[];
  itemCarts$:Subscription;
  subTotal:number;
  checkOutGroup:FormGroup;
  constructor(private cartItemService:CartService,private authService:AuthenticationService,private checkoutService:CheckoutService,private formBuilder:FormBuilder,private authSerivce:AuthenticationService) { }
  ngOnDestroy(): void {
    this.itemCarts$?.unsubscribe();
    
  }

  ngOnInit(): void {
    this.initCartItems();
    this.initCheckOutForm();
  }

  private initCheckOutForm(){
    this.checkOutGroup=this.formBuilder.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Address:['',Validators.required],
      Phone:['',Validators.required],
      Country:['',Validators.required],
      City:['',Validators.required]
    });
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

  checkOut(customer:Customer){
    customer.Id=this.authSerivce.getUser().id;
    customer.CustomerName=customer.FirstName+" "+customer.LastName;
    this.checkoutService.checkout(customer).subscribe(a=>{
      console.log('checkOut is successfull');
    },err=>{console.log(err)});
  }
}
