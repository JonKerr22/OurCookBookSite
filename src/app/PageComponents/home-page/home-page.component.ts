import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { RestService } from 'src/app/Services/rest.service';
import { SignupFormValidation } from 'src/app/Enums/forms';

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
              private restService: RestService) { }

  ngOnInit(): void {
  }

  public onViewCookBooksClick(): void {
    this.router.navigate(['/allcookbooks']);
  }

  public onSubmitSignup(): void {
    const validation = this.isSignupValid();
    if(validation !== SignupFormValidation.Valid) {
      // TODO - will need to do something on form to show invalid
      console.log('invalid login');
      return;
    }
    console.log('valid login');
    const regUserResp = this.restService.registerUser(this.username, this.password);
    regUserResp.subscribe(
      x => console.log(`reg resp has values: ${JSON.stringify(x)}`)
    );
    // TODO - should go somewhere after successful resgistration
  }

  private isSignupValid(): SignupFormValidation {
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
