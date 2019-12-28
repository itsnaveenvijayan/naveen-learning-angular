import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalDefaultComponent } from './modal-default/modal-default.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule,NgbModule,ReactiveFormsModule  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, SignupComponent, HomeComponent, NavbarComponent,ModalDefaultComponent, ModalConfirmComponent, FooterComponent  ],
  bootstrap:    [ AppComponent ],
  providers: [QueryparamsService],
  entryComponents: [ModalDefaultComponent, ModalConfirmComponent]
})
export class AppModule { }
