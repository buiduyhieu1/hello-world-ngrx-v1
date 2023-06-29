import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    BoardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
