import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public product = new Product("", 0, false);

  @Output()
  addProduct = new EventEmitter<Product>();  

  constructor() { }

  ngOnInit() {
  }

  submit() {
    const np = new Product();

    Object.assign(np, this.product);
    this.addProduct.emit(np);
  }
}
