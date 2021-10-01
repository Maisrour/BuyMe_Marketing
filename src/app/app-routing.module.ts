import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'NotFound',component:NotFoundComponent},
  {path:':companyName/:tenant',component:AppComponent},
  {path:'**',component:NotFoundComponent}

  ];
@NgModule({
   imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration:'enabled',anchorScrolling:'enabled',scrollOffset:[0,64]})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
