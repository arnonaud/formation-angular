import { Component, OnInit } from '@angular/core';
import { GenericProductsService } from 'src/app/services/generic-products-service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public currentProduct : Product;

  constructor(public productService: GenericProductsService) { }

  ngOnInit() {
  }

  public showCurrentProduct(product: Product) {
    this.currentProduct = product; 
  }
}
