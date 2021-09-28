import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/_models/productCategory';
import { CurrentCompanyService } from 'src/app/_services/current-company.service';
import { ProductService } from 'src/app/_services/product.service';
import { environment } from 'src/environments/environment';
import {MatDialog} from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../layout/e-shop.component.css','./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:ProductCategory[];
  baseUrl:string=environment.baseImageUrl;
  constructor(private dialog: MatDialog,private productService: ProductService,private companyService:CurrentCompanyService) { }

  ngOnInit(): void {
    this.productService.getCategories(this.companyService.CompanyName)
    .subscribe(c=>this.categories=c);
  }
  openDialog(categoryId:number,productId:number){
    const product= this.categories.find(a=>a.CategoryId==categoryId).Products.find(a=>a.ProductId==productId);
    this.dialog.open(ProductDialogComponent,{data:product});
  }
}
