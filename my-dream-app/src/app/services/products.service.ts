import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { GenericProductsService } from './generic-products-service';

@Injectable()
export class ProductsService implements GenericProductsService{

  private products = new Array<Product>();
  private amount = 0;

  constructor() {}

  public getAllProducts() : Array<Product> {
      return this.products;
  }

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public goFilter(value: number) {
    this.amount = value;
  }
}
