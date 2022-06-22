import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { RestService } from 'src/app/Services/rest.service';
import { SignupFormValidation } from 'src/app/Enums/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { RegisterUserResponse } from 'src/app/Responses/register-user-response';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public username: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(private router: Router,
              private restService: RestService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout(false); //unsure if temp solution or not
  }

  public onViewCookBooksClick(): void {
    this.router.navigate(['/allcookbooks']);
  }

  public onSubmitSignup(): void {
    const validation = this.isSignupValid();
    if(validation !== SignupFormValidation.Valid) {
      // TODO - better alerts
      alert('invalid username and password, password must be 8 characters long');
      return;
    }

    const regUserResp = this.restService.registerUser(this.username, this.password);
    regUserResp.subscribe((x) => {
      const registerResp = new RegisterUserResponse(x);
      if(registerResp.valid){
        this.authService.setLogin(registerResp.sessionKey);
        this.router.navigate(["view-my-cookbook"]);
      }
    });
  }

  private isSignupValid(): SignupFormValidation {
    // TODO - check if username already exists
    if (!this.username || !this.password || !this.confirmPassword) {
      return SignupFormValidation.FormNotCompleted;
    } else if(this.password !== this.confirmPassword) {
      return SignupFormValidation.PasswordsDontMatch;
    } else if(this.password.length < 8) { // TODO - make sure inclues numbers and letters
      return SignupFormValidation.PasswordInvalid;
    } else {
      return SignupFormValidation.Valid;
    }
  }

}
