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
      if(rout.get('companyName')){
        this.companyService.getCompany(rout.get('companyName')).subscribe(company=>{
              console.log(company);
              if(!company){
                  this.router.navigate(['NotFound']);
              }else{
                const temp=company.Template?.Name??'eshop';
                this.router.navigate([company.Name+'/'+temp]);
              }

            });
      }


    });
  }
  title = 'BuyMe';
}
