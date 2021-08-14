import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListComponent } from './list/list.component';
import { PbcreateComponent } from './pbcreate/pbcreate.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, DashboardComponent, ListComponent, PbcreateComponent, EditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
