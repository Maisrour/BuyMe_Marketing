import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { ChangeQtnComponent } from './cart-items/change-qtn/change-qtn.component';
import { RouterModule } from '@angular/router';
import { CozaRoutingModule } from './coza-routing.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ProductDialogComponent,
    CartItemsComponent,
    ChangeQtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CozaRoutingModule]
})
export class CozaModule { }
