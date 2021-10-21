
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CurrentCompanyService } from 'src/app/_services/current-company.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService,private currentComp:CurrentCompanyService) {
  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if (this.auth.isAuthenticated()) {
       return true;
    }
    const path=route.parent.url.toString().split(',').join('/');
    this.router.navigate([path+'/login'],{queryParams:{ returnUrl: state.url }});
    return false;
  }

}
