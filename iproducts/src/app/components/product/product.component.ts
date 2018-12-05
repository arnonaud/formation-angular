import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output()
  select = new EventEmitter<Product>(); 

  @Input()
  product: Product;

  ngOnInit() {
  }

  public productSelected() {
    this.select.emit(this.product);
  }
}
