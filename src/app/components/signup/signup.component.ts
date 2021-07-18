import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
declare let alertify:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  errormsg:string='';

  constructor(private as:AuthService,
              private user:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  signUp(form){
   
    this.as.signUp(form.value.email,form.value.password)
    .then(data=>{
                  this.user.addNewUser(data.user.uid,form.value.name,form.value.address);
                  this.errormsg=''
                  this.router.navigate(['/']);
    })
    .catch(err=>this.errormsg=err)
   // alertify.error("This email is already in use");
    
    
  }
}
/*  console.log(form.value.email);
    console.log(form.value.password);
    this.as.signUp(form.value.email,form.value.password)
    .then(data=>console.log(data))
    .catch(err=>this.errormsg=err)
    alertify.error("This email is already in use");
*/
