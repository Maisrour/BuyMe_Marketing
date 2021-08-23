import { CurrentCompanyService } from './../../../_services/current-company.service';
import { Register } from './../../../_models/register';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationHelper } from 'src/app/_shared/validationHelper';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { MustMatch } from 'src/app/_shared/validation/mustMatch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../layout/e-shop.component.css','./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister: FormGroup;
  errors: string[];
  successfulSave: boolean;
  imageSrc: string;
  showConfirmMessage:boolean=false;
  constructor(private router: Router,private currCompanyService:CurrentCompanyService,private route :ActivatedRoute, private formbuilder: FormBuilder, private auth: AuthenticationService) {
  }
  ngOnInit() {

    this.userRegister = this.formbuilder.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]]
      }

    ,{validator:MustMatch('password','confirmPassword')});
    this.errors = [];
  }
  Save(user:Register) {
    user.CompanyId=this.currCompanyService.CurrentCompanyId();
    this.auth.register(user).subscribe(
      () => this.router.navigate(['../login'],{relativeTo:this.route}),
      err => this.errors = ValidationHelper.GetErrors(err)

    );
  }

}
