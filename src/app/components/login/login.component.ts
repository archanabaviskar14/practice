import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare let alertify:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errormsg:string='';

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
  login(form1){
    //console.log(form1);
    //alertify.success('LoggeIn Successfully');
    this.auth.login(form1.value.email,form1.value.password)
    .then(data=>
      {
        console.log(data)
        this.router.navigate(['/']);
      })
      
    .catch(err=>this.errormsg=err)
    this.errormsg='';
  }
}
