import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EShopComponent } from './layout/e-shop.component';
import { EshopRoutingModule } from './eshop-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    EShopComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[EshopRoutingModule]
})
export class EshopModule { }
