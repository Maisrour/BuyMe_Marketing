import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopComponent } from './layout/e-shop.component';
const routes: Routes = [{path:'eshop',component:EShopComponent,children:[
  {path: 'home', component: HomeComponent}
  ]}
  ];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EshopRoutingModule { }
