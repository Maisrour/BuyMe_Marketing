import { CompanyService } from './_services/company.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: ActivatedRoute,private companyService:CompanyService) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe(rout=>{
      if(rout.get('companyName')){
        this.companyService.getCompany(rout.get('companyName')).subscribe(company=>{
              console.log(company);
            });
      }


    });
  }
  title = 'BuyMe';
}
