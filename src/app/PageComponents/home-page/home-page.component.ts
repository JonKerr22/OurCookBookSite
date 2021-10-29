import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { RestService } from 'src/app/Services/rest.service';
import { compileInjectable } from '@angular/compiler';

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
    console.log(`form info: un:${this.username}\npw:${this.password}\ncnpw:${this.confirmPassword}`);
    if(!this.isSignupValid()) {
      // TODO - will need to do something on form to show invalid
      console.log('invalid login');
      return;
    }
    console.log('valid login');
    this.restService.nothingPost();
    this.restService.registerUser(this.username, this.password);
    // TODO - should go somewhere after successful resgistration
  }

  private isSignupValid(): boolean {
    // TODO - i should have requirements on length for password
    if (!this.username || !this.password || !this.confirmPassword) {
      return false;
    } else if(this.password !== this.confirmPassword) {
      return false;
    } else {
      return true;
    }
  }

}
