import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  login:any;
  password:any;
  Users:any=[];
  
  checkLogin(){
    this.service.getUserList().subscribe(data=>{
      this.Users=data
    });

    this.Users.forEach(x => {
      if(this.login == x.userName && this.password == x.password){
        this.service.User = x;
        this.service.userName = x.userName;
      }
    });
  }

}
