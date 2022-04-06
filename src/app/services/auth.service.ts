import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalPaths } from '../shared/local-paths';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  public mylocalPaths:LocalPaths = new LocalPaths();

    personnelLoginControl(email:string, password:string) {

    let reqHeader = new HttpHeaders({'Content-Type':'application/json'});
    return  this.http.post(this.mylocalPaths.apiPath + "Users/UserLogin",
      {
        "email": email,
        "password": password
      }, { headers: reqHeader, responseType: 'text' });
  }

  GetHttpHeaderWithKey():HttpHeaders {
    const strToken = localStorage.getItem("mytoken") || "";

    let reqHeader = new HttpHeaders({"Authorization":"Bearer " + strToken});

    return reqHeader;
  } 
  
}