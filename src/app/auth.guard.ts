import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authservice: AuthService){}
  canActivate(){
    if(this.authservice.isAuthenticated())
      return true;
    else
      this.router.navigate(['/admin']);
  }

}
