import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/_services/company.service';
@Component({
  selector: 'app-e-shop',
  templateUrl: './e-shop.component.html',
  styleUrls: ['./e-shop.component.css']
})
export class EShopComponent implements OnInit {
 load:boolean=false;
  constructor(private route: ActivatedRoute,private router:Router,private companyService:CompanyService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(rout=>{
      const comName=rout.get('companyName');
      const tenant=rout.get('tenant');
      if(comName&&tenant){
        this.companyService.getCompany(comName,tenant).subscribe(company=>{
              if(!company){
                  this.router.navigate(['NotFound']);
              }else{
                
                localStorage.setItem(`CompanyId_${comName}`,company.Id.toString());
                localStorage.setItem(`CompanyName_${comName}`,comName);
                localStorage.setItem(`tenant_${comName}`,tenant);
                this.load=true;
              }

            });
      }


    });
  }

}
