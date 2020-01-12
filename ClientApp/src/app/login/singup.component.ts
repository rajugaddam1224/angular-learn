import { Component,AfterContentChecked } from '@angular/core';
import { FormControl,FormGroup,Validators}  from  '@angular/forms'
@Component({

    selector:'singup-app',
    templateUrl:'./singup.component.html'
   // styleUrls:['./singup.componet.css']
})
export class SingupComponent {

firstname:string ;
lastname:string ;
gender:string;
email : string ;
password :string;
confirmpassword:string;
/*
Formgroup
1. each elemnent validation can handling by using FormControl. 
2. Tracks the value and validity state of a group of FormControl instances.
3 . formgroup and formcontrol Inherits from the abstract class called AbstractControl.

4.  formgroup excepts an object with AbstractControl properties.
5. you can nested formgroup.
                                                                                                                                                                                                                                                                                                                                                                                                                        



*/

 firstnameCtrl:FormControl =new FormControl(null,Validators.required);
 lastnameCtrl:FormControl =new FormControl(null,Validators.required);
 emailCtrl:FormControl =new FormControl(null,[Validators.required,Validators.email]); 
 passwordCtrl:FormControl =new FormControl(null,Validators.required);
 cpasswordCtrl:FormControl=new FormControl(null,Validators.required);
 genderCtrl:FormControl=new FormControl(null,Validators.required);
singupformgroup:FormGroup =new FormGroup({
firstname:this.firstnameCtrl,
lastname:this.lastnameCtrl,
password:this.passwordCtrl,
cpassword:this.cpasswordCtrl,
email: this.emailCtrl
//gender:this.genderCtrl
})
submitFormdata()
{
    if(this.singupformgroup.valid)
    {

        alert('validation successfully');
    }
    else
    {
        alert('validation failed.'); 
    }
    console.log('errors');
    console.log(this.singupformgroup.errors);
    console.log(this.singupformgroup.controls.errors);
    console.log(this.singupformgroup.controls);
    
}

}