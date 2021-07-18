import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare let alertify:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser:boolean=false;
  isOpen: boolean  =false;

  constructor(private af:AuthService) { }

  ngOnInit(): void {
    this.af.user.subscribe(user=>
      {
        if(user)
        {
          this.isUser=true;
          console.log(this.isUser);
        } 
        else
        {
          this.isUser=false;
          console.log(this.isUser);
        } 
      })
  }

  toggleNavbar(){
    this.isOpen=!this.isOpen;
  }

  logout(){
    this.af.logout();
    alertify.success('Logout successfully');

  }

}
