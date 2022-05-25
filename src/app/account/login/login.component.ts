import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servis:UserService) { }

  ModalTitle:any = "";
  User:any;
  UserName:any;
  ActivateLoginFormComp:any=false;
  ActivateRegisterComp:any=false;

  ngOnInit(): void {
    this.refreshFeedbackList();
  }

  toRegisterFrom(){
    this.ActivateLoginFormComp=false;
    this.ActivateRegisterComp=true;
  }

  loginClick(){
    this.ActivateLoginFormComp = true;
    this.ModalTitle = "Logowanie";
  }

  registerClick(){
    this.ActivateRegisterComp = true;
    this.ModalTitle = "Rejestracja";
  }

  closeClick(){
    this.ActivateLoginFormComp=false;
    this.ActivateRegisterComp=false;

    this.refreshFeedbackList();
  }

  refreshFeedbackList(){
      this.User=this.servis.User;
      if(!this.User){
        this.UserName="użytkowniku";
      }else {
        this.UserName = this.User.UserName
      }

  }

}
