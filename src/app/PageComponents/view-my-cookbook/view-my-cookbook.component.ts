import { Component, OnInit } from '@angular/core';

import { UserSessionkeyResolverService } from '../../Resolvers/user-sessionkey-resolver.service';

@Component({
  selector: 'app-view-my-cookbook',
  templateUrl: './view-my-cookbook.component.html',
  styleUrls: ['./view-my-cookbook.component.css']
})
export class ViewMyCookbookComponent implements OnInit {

  constructor(private userSessionkeyResolver : UserSessionkeyResolverService) { }

  ngOnInit(): void {
  }

  public get usersName(): string {
    return this.userSessionkeyResolver.userInfo ? this.userSessionkeyResolver.userInfo.full_name : '';
  }
  

}
