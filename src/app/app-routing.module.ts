import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'NotFound',component:NotFoundComponent},
  {path:':companyName',component:AppComponent},
  {path:'**',component:NotFoundComponent}

  ];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
