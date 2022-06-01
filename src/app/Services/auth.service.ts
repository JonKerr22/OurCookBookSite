import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  //this function assumes the login has been validated already
  setLogin(userKey: string) : void {
    localStorage.setItem('isLoggedIn','true');    
    localStorage.setItem('key', userKey);    
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true' ?? false;
  }

  logout() : void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('key');
    this.router.navigate(["/"]);
  }
}
