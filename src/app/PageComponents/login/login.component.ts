import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestService } from 'src/app/Services/rest.service';
import { LoginConfirmationResponse } from 'src/app/Responses/login-confirmation-response';
import { AuthService } from 'src/app/Services/auth.service';

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
  }

  public onLogin(): Promise<void> {
    if(!this.username || !this.password){
      console.log('form incomplete'); // TODO - alert or form indicated
      return;
    }
    const loginResp =  this.restService.confirmLogin(this.username, this.password);
    loginResp.subscribe((x) => {
      let loginSuccess: LoginConfirmationResponse = new LoginConfirmationResponse(x);

      if(!loginSuccess.valid) {
        console.log('failed login'); // TODO - alert or form indicated
        return ;
      }
      this.authService.setLogin(loginSuccess.userInfo.session_key);
      this.router.navigate(["view-my-cookbook"]); // TODO -  anything on this side to check on what params the resolver needs?
    });
  }

}
