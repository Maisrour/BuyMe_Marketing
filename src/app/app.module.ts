import { AuthGuard } from './_shared/guard/auth.guard';
import { CompanyService } from './_services/company.service';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EshopModule } from './_components/eShop/eshop.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './_shared/interceptors/loaderInterceptor';
import { LoaderComponent } from './loader/loader.component';
import { AuthenticationService } from './_services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    EshopModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CompanyService,AuthenticationService,AuthGuard,[{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true

  }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
