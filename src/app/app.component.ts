import { CompanyService } from './_services/company.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
                const temp=company.Template?.Name??'eshop';
                localStorage.setItem(`CompanyId_${comName}`,company.Id.toString());
                localStorage.setItem(`CompanyName_${comName}`,comName);
                localStorage.setItem(`tenant_${comName}`,tenant);
                this.router.navigate([`${comName}/${tenant}/${temp}`]);
              }

            });
      }


    });
  }
}
