import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //this function assumes the login has been validated already
  setLogin(userKey: string) : void {
    localStorage.setItem('isLoggedIn','true');    
    localStorage.setItem('key', userKey);    
  }

  logout() : void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('key');    
  }
}
