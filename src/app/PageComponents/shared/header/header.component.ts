import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() displayHomepageHeaderOptions = false;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  signupScroll() {
    this.scroller.scrollToAnchor("signup-section");
  }

}
