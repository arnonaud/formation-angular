import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = false;
  public user = new User('');

  constructor(private userService: UserService) { }

  public login() {
    this.isAuthenticated = true;
  }

  public logout() {
    this.isAuthenticated = false;
  }

  public isLogged() {
    return this.isAuthenticated;
  }

  public setUsername(username: string) {
    this.isAuthenticated = true;
    this.user.name = username;
  }

  public isLoggedSync(): Observable<boolean> {
    return this.userService
      .getUsersAsync()
      .mergeMap(elem => elem)
      .find(elem => elem.name === this.user.name)
      .map(elem => elem !== undefined)
      
      
  }
}
