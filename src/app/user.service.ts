import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private service:SharedService) { }

  readonly APIUrl = "https://polar-island-77389.herokuapp.com";
  readonly PhotoUrl = "https://polar-island-77389.herokuapp.com/media/";

  userName:any = "użytkowniku";

  User:any;

  // Users
  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ '/user/');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+ '/user/', val);
  }

}
