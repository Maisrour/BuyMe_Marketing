import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from 'src/app/_models/product';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['../layout/e-shop.component.css','./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  baseUrl:string=environment.baseImageUrl;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
