import { Token } from './../../../_models/token';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from 'src/app/_models/company';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { CompanyService } from 'src/app/_services/company.service';
import { CurrentCompanyService } from 'src/app/_services/current-company.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../layout/e-shop.component.css','./header.component.css']
})
export class HeaderComponent implements OnInit {

  company: Company;
  $company: Subscription;
  authorize=false;
  token:Token;
  constructor(private router:Router,private currComp:CurrentCompanyService,private auth:AuthenticationService,private route: ActivatedRoute,private companyService:CompanyService) {}


  ngOnInit(): void {
    
      if(this.currComp.CompanyName&&this.currComp.CurrentTenant()){
        this.$company= this.companyService.getCompany(this.currComp.CompanyName,this.currComp.CurrentTenant()).subscribe(company=>{
            this.company=company;
            if(this.auth.isLogin()){
              this.authorize=true;
              this.token= this.auth.getUser();
            }
            });
      }
    
  }

  logOut() {
    const tentant=this.currComp.CurrentTenant();
    localStorage.clear();
    this.router.navigate([this.company.Name+'/'+tentant]);
  }
  ngOnDestroy(): void {
    this.$company.unsubscribe();
  }

}
