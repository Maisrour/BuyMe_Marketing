import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EShopComponent } from './layout/e-shop.component';
import { EshopRoutingModule } from './eshop-routing.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CategoryComponent } from './category/category.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    EShopComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ProductDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule
  ],
  exports:[EshopRoutingModule]
})
export class EshopModule { }
