import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-per-user-products',
  templateUrl: './per-user-products.component.html',
  styleUrls: ['./per-user-products.component.css']
})
export class PerUserProductsComponent implements OnInit {

  usersResolve: Array<User>;
  
  constructor(
    public userService: UserService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.usersResolve = data['users']);
  }

  showProducts(user: User) {
    this.router.navigate(['/perusers', user.name]);
  }

}
