import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LandingComponent } from '../components/landing/landing.component';
import { ProductsComponent } from '../components/products/products.component';
import { UsersComponent } from '../components/users/users.component';
import { LoggedGuard } from '../guards/logged.guard';
import { UsersResolver } from '../resolvers/users-resolver.service';
import { PerUserProductsComponent } from '../components/per-user-products/per-user-products.component';
import { ProductsResolver } from '../resolvers/products-resolver.service';
import { AdminComponent } from '../admin/components/admin.component';



export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: LandingComponent },
  { path: 'products', component: ProductsComponent, canActivate: [LoggedGuard] },
  { path: 'users', component: UsersComponent, resolve: { users: UsersResolver} },
  { path: 'perusers', 
    component: PerUserProductsComponent, 
    children: [
      {
        path: ':id', 
        component: ProductsComponent, 
        resolve: 
          { 
            products: ProductsResolver
          }
      }
    ],
    resolve: { users: UsersResolver}
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'}
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
