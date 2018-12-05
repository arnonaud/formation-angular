import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Product } from '../models/product';
import { GenericProductsService } from '../services/generic-products-service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]>{

  constructor(private productsService: GenericProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] {
    return this.productsService.getProductsByName(route.paramMap.get('id'));
  }
}
