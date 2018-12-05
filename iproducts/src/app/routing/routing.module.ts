import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LandingComponent } from '../components/landing/landing.component';
import { ProductsComponent } from '../components/products/products.component';
import { UsersComponent } from '../components/users/users.component';



export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: LandingComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      ROUTES
    )
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { 

}
