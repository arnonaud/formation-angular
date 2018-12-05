import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponent } from './components/sub/sub.component';
import { Sub2Component } from './components/sub2/sub2.component';
import { GenericProductsService } from './services/generic-products-service';
import { ProductsService } from './services/products.service';
import { ProductPipe } from './pipes/product.pipe';
import { FilterByPricePipe } from './pipes/filter-by-price.pipe';
import { BigDirective } from './directives/big.directive';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    Sub2Component,
    ProductPipe,
    FilterByPricePipe,
    BigDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
     {
       provide: GenericProductsService,
       useClass: ProductsService
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
