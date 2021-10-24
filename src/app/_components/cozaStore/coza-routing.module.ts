import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AuthGuard } from 'src/app/_shared/guard/auth.guard';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path:':companyName/:tenant/coza',component:LayoutComponent,children:[
  {path: 'home', component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cartItems',component:CartItemsComponent,canActivate:[AuthGuard]}
  ]}
  ];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CozaRoutingModule { }
