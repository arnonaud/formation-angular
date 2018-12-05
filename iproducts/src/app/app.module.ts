import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { GenericProductsService } from './services/generic-products-service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductFormComponent,
    UserFormComponent,
    UsersComponent,
    LandingComponent,
    LoginComponent,
    ErrorComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
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
