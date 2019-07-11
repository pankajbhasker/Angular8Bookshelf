import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  showLoader =  false;
  constructor(private userService: UsersService, private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.showLoader = true;
    this.users = this.userService.getUsers();
    this.titleService.setTitle('User List ');
    this.metaService.addTag({name: 'Pankaj', content: 'Book Shelf'});
    this.showLoader = false;
  }
}
