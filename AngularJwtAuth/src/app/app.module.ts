

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import {DataTableModule} from "angular-6-datatable";
import { NgxPaginationModule } from 'ngx-pagination';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { ErrorPageComponent } from './error-page/error-page.component';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ChangePasswordComponent } from './change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    ErrorPageComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ],
  providers: [httpInterceptorProviders,BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
