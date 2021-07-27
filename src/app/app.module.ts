import { CompanyService } from './_services/company.service';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EshopModule } from './_components/eShop/eshop.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    EshopModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
