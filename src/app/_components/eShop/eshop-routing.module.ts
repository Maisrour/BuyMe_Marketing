import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopComponent } from './layout/e-shop.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AuthGuardService } from 'src/app/_services/auth-guard.service';
const routes: Routes = [{path:':companyName/eshop',component:EShopComponent,children:[
  {path: '', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cartItems',component:CartItemsComponent,canActivate:[AuthGuardService]}
  ]}
  ];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EshopRoutingModule { }
