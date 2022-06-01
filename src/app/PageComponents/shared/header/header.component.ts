import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() displayHomepageHeaderOptions = false;
  @Input() username: string = "";

  constructor(private scroller: ViewportScroller, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  signupScroll() {
    this.scroller.scrollToAnchor("signup-section");
  }

  public logoClick() {
    //this assume view my cookbook is the default view for user logged in, maybe maybe global constant for the route if i start to use this in a lot of places
    this.authService.isUserLoggedIn() ? this.router.navigate(["view-my-cookbook"]) : this.router.navigate(["/"]);
  }
  public onLogoutClick() {
    this.authService.logout();
  }

  public get displayUserName(): boolean {
    return !!this.username;
  }

}
