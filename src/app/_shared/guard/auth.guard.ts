
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService) {
  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if (this.auth.isAuthenticated()) {
       return true;
    }
  console.log(route);
    this.router.navigate([route.parent.url.toString().replace(',','/')+'/login'],{queryParams:{ returnUrl: state.url }});
    return false;
  }

}
