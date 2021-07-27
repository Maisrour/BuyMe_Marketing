import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:':companyName',component:AppComponent}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
