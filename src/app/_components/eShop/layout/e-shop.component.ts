import { Company } from './../../../_models/company';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/_services/company.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-e-shop',
  templateUrl: './e-shop.component.html',
  styleUrls: ['./e-shop.component.css']
})
export class EShopComponent implements OnInit,OnDestroy {
  company!: Company;
  $company!: Subscription;
  constructor(private route: ActivatedRoute,private companyService:CompanyService) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(rout=>{
      if(rout.get('companyName')){
        this.$company= this.companyService.getCompany(rout.get('companyName')).subscribe(company=>{
            this.company=company;
            });
      }


    });
  }
  ngOnDestroy(): void {
    this.$company.unsubscribe();
  }
}
