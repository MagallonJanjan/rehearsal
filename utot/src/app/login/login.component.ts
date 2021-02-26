import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private router : Router
  ) { }

  loginUser:any = FormGroup

  ngOnInit(): void {

    this.loginUser = this.formBuilder.group({
        email : ['',[Validators.required,Validators.email]],
        password : ['', [Validators.required,Validators.minLength(8)]]
    })

  }
  
  loginSpinner = true;

  onLogin(){
    this.loginSpinner = false;
    console.log(this.loginUser.value);
    this.router.navigate(['/dashboard']);
    
  }

}
