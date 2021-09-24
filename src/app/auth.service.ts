import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated(){
    let token = localStorage.getItem('user');
    if (token)
      return true;
    else
      return false; // redirect here instead of redirecting in guard
  }
}
