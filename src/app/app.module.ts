import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule }     from './app-routing.module';

import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_directives/alert.component';

import { MessageService }       from './message.service';
import { AuthenticationService }          from './authentication.service';
import { UserService }          from './user.service';
import { AlertService }          from './alert.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    DashboardComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
        MessageService,
        AuthGuard,
        AuthenticationService,
        UserService,
        AlertService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
