import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { GenericProductsService } from 'src/app/services/generic-products-service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  public amount = 0;

  constructor(public productService: GenericProductsService) {}

  ngOnInit() {
  }

  public addProduct(name: string, price: number): void {
    this.productService.addProduct(new Product(name, price, false));
  }

  public goFilter(value: number) {
    this.amount = value;
  }
}
