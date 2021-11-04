import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/_models/cartItem';
import { Customer } from 'src/app/_models/customer';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CartService } from 'src/app/_services/cart.service';
import { CheckoutService } from 'src/app/_services/checkout.service';
import { CurrentCompanyService } from 'src/app/_services/current-company.service';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../layout/e-shop.component.css','./checkout.component.css']
})
export class CheckoutComponent implements OnInit ,OnDestroy{

  cartItems:CartItem[];
  itemCarts$:Subscription;
  customer$:Subscription;
  checkout$:Subscription;
  subTotal:number;
  checkOutGroup:FormGroup;
  constructor(private cartItemsService:CartService,private customerService:CustomerService,private currCompany:CurrentCompanyService,private cartItemService:CartService,
    private router:Router,private checkoutService:CheckoutService,private formBuilder:FormBuilder,private authSerivce:AuthenticationService) { }
  ngOnDestroy(): void {
    this.itemCarts$?.unsubscribe();
    this.customer$?.unsubscribe();
    this.checkout$?.unsubscribe();
  }

  ngOnInit(): void {
    this.initCartItems();
    this.initCheckOutForm();
    this.getCustomerProfile();
  }

  private initCheckOutForm(){
    this.checkOutGroup=this.formBuilder.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Address:['',Validators.required],
      Phone:['',Validators.required],
      Country:['',Validators.required],
      City:['',Validators.required],
      Email:['',Validators.required]
    });
  }
  
  private getCustomerProfile(){
    this.customer$= this.customerService.GetCustomer(this.authSerivce.getUser().id).subscribe(cus=>{
      this.checkOutGroup.patchValue({
        FirstName:cus.CustomerName?.split(' ')[0],
        LastName:cus.CustomerName?.split(' ')[1],
        Address:cus.Address,
        Phone:cus.Phone,
        Country:cus.Country,
        City:cus.City,
        Email:cus.Email
      });
    });
  }
  private initCartItems() {
    this.itemCarts$ = this.cartItemService.GetCartItems(this.authSerivce.getUser().id).subscribe(
      items => {
        this.cartItems = items;
        this.subTotal=items.map(a=>a.QTN*a.Product.DefaultSellingPrice).reduce((sum,current)=>sum+current,0);
      }, err => console.log(err)
    );
  }

  checkOut(customer:Customer){
    customer.Id=this.authSerivce.getUser().id;
    customer.CustomerName=customer.FirstName+" "+customer.LastName;
    this.checkout$=this.checkoutService.checkout(customer).subscribe(a=>{
       const link=this.currCompany.CompanyName+'/'+this.currCompany.CurrentTenant();
       this.cartItemService.UpdateCartStatus();
       this.router.navigateByUrl(link+'/eshop'+'/orders')
    },err=>{console.log(err)});
  }
}
