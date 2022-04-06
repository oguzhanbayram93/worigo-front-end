import { Injectable }  from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { JwtLines, SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  public public_role:string=""; 
  constructor(private router: Router,
    // public userservice: UsersService,
  public securityservice:SecurityService) { }
  async canActivate() {
    // const strToken = localStorage.getItem("mytoken") || "";
       
    //     await this.userservice.getUserDetails(this.securityservice.JwtSerializer(strToken, JwtLines.userId)).then(
    //         res => this.responseData = res as unknown as ResponseData);
    //         this.public_role = this.responseData.data.role;
    //     if (this.public_role == 'B') {
        
    //      window.location.href='Users/Dashboard';
          
    //     }
     
        return true;
    }

}
