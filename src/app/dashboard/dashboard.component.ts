import { Component, OnInit } from '@angular/core';

import { User } from '../users';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor() { }

  ngOnInit() {
    let user = new User();
    for(let i = 0; i< 4; i++) {
      user.username = "user" + i;
      this.users.push(user);
    }
  }

}
