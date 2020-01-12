import { Component,AfterContentChecked } from '@angular/core';
import {FormsModule, FormControl}  from  '@angular/forms'
import {Route, Router}  from  '@angular/router'
@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  tittle:"App";
  Template:Templates.Login;
  private router:Router;
  constructor(r:Router)
  {
    this.router=r;
  }
  usernamecontrol:FormControl =new FormControl(); 
  passwordcontrol:FormControl =new FormControl();   
/*
Note: you can use following two statements instead of above  when no required attributes in HTML Tags.

  usernamecontrol:FormControl =new FormControl(null,Validators.required); 
  passwordcontrol:FormControl =new FormControl(null,Validators.required); 

*/
  /*
  *The formcontrol  directive serves only to bind an existing   FormControl object to a DOM element.
  *The formcontrol object that you instantiate inside the componenet constructor can either utilize 
  validation attributes inside an HTML Tag, or Accept angular validation when initialized ; 
  or, it can do both.
  *The formcontrol object instantiated,it does not mean that it is able to validate the input immediately.


W
  */
GoTosingup()
{
  enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}
}
  submitFormdata():void
  {
    let isvalidation =false;
    if(this.usernamecontrol.valid)
    {
      console.log('validation success for username');
      isvalidation=true;
    }
    else
    {
      isvalidation =false;
      console.log('validation faiue for username');
     // alert('Invalid username')
    }
  
    //passwordcontrol
    
  
    if(this.passwordcontrol.valid)
    {
      isvalidation=true;
      console.log('validation success for password');
    }
    else
    {
      isvalidation =false;
      console.log('validation fa for password');
      //alert('Invalid password')
  
  }
  if(isvalidation)
  {
  console.log('username and password successfully.');
  }
    }
    ngAfterContentChecked(){
      console.log('content checked started.')
    }
  }
  enum Templates {
    Login = 1,
    Singup = 2,
    ForgetPassword = 3
    
}
