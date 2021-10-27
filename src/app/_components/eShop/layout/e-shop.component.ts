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
 loadAPI: Promise<any>;
  constructor(private route: ActivatedRoute,private router:Router,private companyService:CompanyService) {}
  ngOnInit(): void {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
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
 
 

  
  public loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = [
          "/assets/eShop/js/jquery.min.js",
          "/assets/eShop/js/jquery-migrate-3.0.0.js",
          "/assets/eShop/js/jquery-ui.min.js",
          "/assets/eShop/js/popper.min.js",
          "/assets/eShop/js/bootstrap.min.js",
          "/assets/eShop/js/slicknav.min.js",
          "/assets/eShop/js/owl-carousel.js",
          "/assets/eShop/js/magnific-popup.js",
          "/assets/eShop/js/facnybox.min.js",
          "/assets/eShop/js/waypoints.min.js",
          "/assets/eShop/js/finalcountdown.min.js",
          "/assets/eShop/js/nicesellect.js",
          "/assets/eShop/js/ytplayer.min.js",
          "/assets/eShop/js/flex-slider.js",
          "/assets/eShop/js/scrollup.js",
          "/assets/eShop/js/onepage-nav.min.js",
          "/assets/eShop/js/easing.js"
        ];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}
}
