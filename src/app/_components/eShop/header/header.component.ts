import { Token } from './../../../_models/token';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from 'src/app/_models/company';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CompanyService } from 'src/app/_services/company.service';
import { CurrentCompanyService } from 'src/app/_services/current-company.service';
import { CartItem } from 'src/app/_models/cartItem';
import { environment } from 'src/environments/environment';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../layout/e-shop.component.css','./header.component.css']
})
export class HeaderComponent implements OnInit {

  company: Company;
  $company: Subscription;
  authorize=false;
  token:Token;
  cartItems:CartItem[];
  $cartItems:Subscription;
  $refreshCart:Subscription;
  baseUrl:string=environment.baseImageUrl;
  constructor(private router:Router,private cartItemService:CartService,private currComp:CurrentCompanyService,private auth:AuthenticationService,private route: ActivatedRoute,private companyService:CompanyService) {}


  ngOnInit(): void {
    
      if(this.currComp.CompanyName&&this.currComp.CurrentTenant()){
        this.$company= this.companyService.getCompany(this.currComp.CompanyName,this.currComp.CurrentTenant()).subscribe(company=>{
                this.company=company;
                if(this.auth.isAuthenticated()){
                  this.authorize=true;
                  this.token= this.auth.getUser();
                }
            });
      }
      if(this.auth.isAuthenticated()){
         this.initCartItems();
         this.refreshCart();
      }
      
    
  }
  initCartItems(){
    this.$cartItems= this.cartItemService.GetCartItems(this.auth.getUser().id).subscribe(
      a=>{this.cartItems=a;},err=>console.log(err)
    );
  }
  refreshCart(){
     this.$refreshCart= this.cartItemService.CartShoppingStatus().subscribe(cartStatus=>{
      this.initCartItems();
  });
  }
 
  deleteCartItem(cartItemId:number){
    this.$cartItems=this.cartItemService.DeleteCartItem(cartItemId)
    .subscribe(a=>{this.cartItems=this.cartItems.filter(a=>a.Id!=cartItemId);
    this.cartItemService.UpdateCartStatus();},
    err=>console.log(err));
  }
  checkout(){
    console.log(this.cartItems);
  }
  logOut() {
    const tentant=this.currComp.CurrentTenant();
    localStorage.clear();
    this.router.navigate([this.company.Name+'/'+tentant]);
  }
  ngOnDestroy(): void {
    this.$company?.unsubscribe();
    this.$refreshCart?.unsubscribe();
    this.$cartItems?.unsubscribe();
  }

}
