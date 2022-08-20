import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Models/user';
import { RestService } from 'src/app/Services/rest.service';
import { Cookbook } from 'src/app/Models/cookbook';
import { DefaultCookbook } from 'src/app/Constants/default-objects';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() displayHomepageHeaderOptions = false;
  @Input() userInfo: User;

  constructor(private scroller: ViewportScroller, 
    private authService: AuthService,
    private router: Router,
    private restService: RestService) { }

  ngOnInit(): void {
  }

  signupScroll() {
    this.scroller.scrollToAnchor("signup-section");
  }

  public logoClick() {
    if (this.authService.isUserLoggedIn()) {
      //this assume view my cookbook is the default view for user logged in, maybe maybe global constant for the route if i start to use this in a lot of places
      let userCookbook: Cookbook = DefaultCookbook;
      this.restService.getUserCookbook(this.userInfo.id).subscribe((pythonResp: Array<any>) => {
        if(pythonResp.length > 0 && pythonResp[0]) {
          userCookbook = new Cookbook(pythonResp[0]);;
        }
        this.router.navigate(["view-my-cookbook", this.userInfo.id], {state: {cookbookId: userCookbook.isUnlabeled() ? -1 : userCookbook.id}} );
      });
    } else {
      this.router.navigate(["/"]);
    }
    
  }
  public onLogoutClick() {
    this.authService.logout();
  }

  public get displayUserName(): boolean {
    return !!this.username;
  }
  public get username(): string {
    return this.userInfo?.full_name;
  }

}
