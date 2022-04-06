import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersecurityService {

  constructor() { }
  loginControl() {
    if(localStorage.getItem("mytoken") == null)
    {
      window.location.href="";
    }
  }
}
