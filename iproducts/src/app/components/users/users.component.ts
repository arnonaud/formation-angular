import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Observable<Array<User>>;
  usersResolve: Array<User>;

  constructor(public userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.userService.getUsersAsync();

    // OU sans pipe async
    this.userService
      .getUsersAsync()
      .subscribe(result => {
        this.usersResolve = result;
      });

    // OU avec resolver
    this.route.data.subscribe(data => this.usersResolve = data['users']);
  }

}
