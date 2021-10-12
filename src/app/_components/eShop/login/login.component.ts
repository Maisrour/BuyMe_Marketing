import { CurrentCompanyService } from './../../../_services/current-company.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/_models/login';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ValidationHelper } from 'src/app/_shared/validationHelper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../layout/e-shop.component.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin!: FormGroup;
  errors: string[]=[];
  returnUrl: string;
  constructor(private route: ActivatedRoute,private currCompanyService: CurrentCompanyService,
    private router: Router,private formBuilder: FormBuilder  , private auth: AuthenticationService) {

  }

  ngOnInit() {
   this.userLogin = this.formBuilder.group({email: ['', [Validators.required,Validators.email]], password: ['', Validators.required]});
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || this.currCompanyService.CompanyName+'/'+this.currCompanyService.CurrentTenant();


  }

  login(user:Login) {
    user.CompanyId=this.currCompanyService.CurrentCompanyId();
    this.auth.login(user).subscribe( (result) =>{
       localStorage.setItem(`auth_token_${this.currCompanyService.CompanyName}`, result.Token);
       this.router.navigateByUrl(this.returnUrl);
    } ,
    err => this.errors = ValidationHelper.GetErrors(err)
    );

  }

}
