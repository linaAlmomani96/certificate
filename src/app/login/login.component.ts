import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
logInForm = this.formBuilder.group({
  userName:['',Validators.required],
  password:['',Validators.required]

})
  ngOnInit(): void {
  }
  OnLogin(){
    console.log(this.logInForm.controls['userName'].value)
  }
}
