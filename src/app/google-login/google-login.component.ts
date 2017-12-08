import { Component, OnInit } from '@angular/core';
import {GoogleSignInSuccess} from 'angular-google-signin';

import { Router } from '@angular/router';



@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  profilePic: any;

  constructor(private router: Router) { }

  private myClientId: string = '68230247773-00e64ri2mah9vjtuvradc7rvkeqqtlhb.apps.googleusercontent.com';


  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    this.profilePic = profile.getImageUrl();
    let user = { "username":profile.getName(), "picture":profile.getImageUrl(), "email":profile.getEmail(), "id_token":googleUser.getAuthResponse().id_token};
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
