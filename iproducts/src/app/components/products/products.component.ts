import { Component, OnInit } from '@angular/core';
import { GenericProductsService } from 'src/app/services/generic-products-service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public currentProduct : Product;
  products: Array<Product>;

  constructor(
    public productService: GenericProductsService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => { 
      this.products = data['products'];
     });
  }

  public showCurrentProduct(product: Product) {
    this.currentProduct = product; 
  }
}
