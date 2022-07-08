import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestService } from 'src/app/Services/rest.service';
import { LoginConfirmationResponse } from 'src/app/Responses/login-confirmation-response';
import { AuthService } from 'src/app/Services/auth.service';
import { of } from 'rxjs';
import { Cookbook } from 'src/app/Models/cookbook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private restService: RestService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.logout(false); //unsure if temp solution or not
  }

  public onLogin(): Promise<void> {
    if(!this.username || !this.password){
      alert('Please enter both username and password'); // TODO - better alert
      return;
    }
    this.restService.confirmLogin(this.username, this.password).subscribe((x) => {
      const loginSuccess: LoginConfirmationResponse = new LoginConfirmationResponse(x);

      if(!loginSuccess.valid) {
        alert('Invalid username or password'); // TODO - better alert
        return ;
      }
      let userCookbook: Cookbook;
      this.restService.getUserCookbook(loginSuccess.userInfo.id).subscribe((pythonResp: Array<any>) => { //nested subscribes is not great, do a more complicated api and DB call to make this a unified response with all the needed info

        if(pythonResp.length > 0 && !pythonResp[0]) { //empty response
          
          return of(false);
        }
        
        userCookbook = new Cookbook(pythonResp[0]);
        this.authService.setLogin(loginSuccess.userInfo.session_key);
        this.router.navigate(["view-my-cookbook", loginSuccess.userInfo.id], {state: {cookbookId: userCookbook.id}} ); 
        
        return of(true);
      });

    });
  }

}
