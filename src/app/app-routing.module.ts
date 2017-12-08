import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GeolocComponent } from './geoloc/geoloc.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'geolocalisation', component: GeolocComponent, canActivate: [AuthGuard] },
  { path: 'googleLogin', component: GoogleLoginComponent/*, canActivate: [AuthGuard]*/ },

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
