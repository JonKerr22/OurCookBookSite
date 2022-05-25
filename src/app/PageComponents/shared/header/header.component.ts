import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';

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
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  signupScroll() {
    this.scroller.scrollToAnchor("signup-section");
  }

  public onLogoutClick() {
    this.authService.logout();
  }

  public get displayUserName(): boolean {
    return !!this.username;
  }

}
