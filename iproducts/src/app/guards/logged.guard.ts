import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  users: Observable<Array<User>>;

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let loggedIn = this.authService.isLoggedSync();
      if (!loggedIn) {
        this.router.navigate(['/login']);
      }

      return loggedIn;
  
  }
}
