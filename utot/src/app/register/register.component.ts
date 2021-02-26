import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private router : Router
  ) { }
  
  userProfile:any = FormGroup;

  ngOnInit(): void {

    this.userProfile = this.formBuilder.group({
      username : ['', [Validators.required, Validators.minLength(4)]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword : ['',Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    })
  }

 
  MustMatch(controlName: string, matchingControlName: string) {

    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  submitButton = false; //boolean variable for button spinner

  onRegister(){
    console.log(this.userProfile.value);
    if(this.userProfile.invalid){
        return;
    }
    
      this.submitButton = true;
      this.router.navigate(['/login']);

  }
}
