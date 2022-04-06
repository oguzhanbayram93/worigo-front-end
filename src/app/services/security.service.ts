
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalPaths } from '../shared/local-paths';
// import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  public mylocalPaths:LocalPaths = new LocalPaths();
  constructor(private http : HttpClient) { }
  // JwtSerializer(key:string, line:JwtLines) {
  //   const helper = new JwtHelperService();
  //   const decodedToken = helper.decodeToken(key);
  //   let decodedJWT = JSON.parse(JSON.stringify(decodedToken));
  //   if(line == JwtLines.companyName)
  //     return decodedJWT.companyName;
  //   else if(line == JwtLines.password)
  //     return decodedJWT.password;
  //   else if(line == JwtLines.companiesId)
  //     return decodedJWT.companiesId;
  //   else if(line == JwtLines.userId)
  //     return decodedJWT.userId;
  //   else if(line == JwtLines.userName)
  //     return decodedJWT.userName;
  //   else if(line == JwtLines.email)
  //     return decodedJWT.email;
  //   else if (line == JwtLines.role)
  //     return decodedJWT.role;
  //     else if (line == JwtLines.imageUrl)
  //     return decodedJWT.imageUrl;
  //   else return "";
  // }
  GetHttpHeaderWithKey():HttpHeaders {
    const strToken = localStorage.getItem("mytoken") || "";
 

    let reqHeader = new HttpHeaders({"Authorization":"Bearer " + strToken});
    return reqHeader;
  }
}

export enum JwtLines {
  email, // Mail Address
  companyName,
  jobstarted, // First Job Started
  companiesId, // Position
  userId, // User Id
  userName, // Name Surname
  role, // My Current Role,
  password,
  imageUrl,
}
