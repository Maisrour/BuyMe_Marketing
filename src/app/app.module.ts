import { CurrentCompanyService } from './_services/current-company.service';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [CompanyService,AuthenticationService,CurrentCompanyService,AuthGuard,[{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true

  }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
