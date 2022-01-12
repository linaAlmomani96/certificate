import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewuserComponent } from './newuser/newuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

const routs:Routes=[{path:"",component:NewuserComponent},
{path:"listuser",component:UserlistComponent},
{path:"login",component:LoginComponent}]
@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    UserlistComponent,
    DeptlistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
  RouterModule.forRoot(routs),
  ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
