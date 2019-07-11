import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user; // property to hold our user when we eventually grab them from github api
  showLoader =  false;
  // inject the things we need
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  // watch the route parameters for changes
  // every time it changes (or on first load), go get a user from userservice
  ngOnInit() {
    this.showLoader = true;
    this.route.params.subscribe(params => {
      const username = params['login'];
      this.userService
          .getUser(username)
          .subscribe(user => {this.user = user;  this.showLoader = false; });
    });
  }

}
