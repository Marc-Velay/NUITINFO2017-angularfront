import { Component, OnInit } from '@angular/core';
 
import { User } from '../users';
import { UserService } from '../user.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {
    currentUser: any;
    users: User[] = [];
 
    constructor(private userService: UserService) {        
    }
 
    ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
}
