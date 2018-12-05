import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { GenericProductsService } from './generic-products-service';

@Injectable()
export class ProductsService implements GenericProductsService{

  private products = new Array<Product>();
  private amount = 0;

  constructor() {
    this.products.push(new Product("Kastell brune", 4, false));
    this.products.push(new Product("Punk Ipa", 3, false));
    this.products.push(new Product("Kwak", 4.5, false));
  }

  public getAllProducts() : Array<Product> {
      return this.products;
  }

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public goFilter(value: number) {
    this.amount = value;
  }

  public add(product: Product) {
    this.products.push(product);
  }
}
