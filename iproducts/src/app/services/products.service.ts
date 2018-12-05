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

  public getProductsByName(name: string): Product[] {
    let products = [];
    if(name === "Leanne Graham") {
      products = [
        new Product('p1', 100, false),
        new Product('p2', 100, false),
        new Product('p3', 100, false)
      ]
    } else if(name === "Ervin Howell") {
      products =  [
        new Product('p4', 100, false),
        new Product('p5', 100, false)
      ]
    }
    return products;
  }
}
