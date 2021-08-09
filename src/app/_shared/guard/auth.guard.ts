
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isLogin()) {
       return true;
    }
    this.router.navigate(['login'],{queryParams:{ returnUrl: state.url }});
    return false;
  }

}
