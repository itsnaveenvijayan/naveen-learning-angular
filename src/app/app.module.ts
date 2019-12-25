import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { QueryparamsService } from './service/queryparams.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, SignupComponent, HomeComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QueryparamsService]
})
export class AppModule { }
