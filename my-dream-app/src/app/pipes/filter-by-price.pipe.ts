import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(value: Array<Product>, args?: any): any {
    return value.filter(elem => elem.price > args);
  }

}
