import { Component, OnInit } from '@angular/core';

import { RestService } from './Services/rest.service';
import { environment } from '../environments/environment'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OurCookBook';
  env = environment;

  constructor(private restService: RestService) {}

  users: string;//[User];
  isError: boolean;
  codezUpStr: string;
  firstTableAll: string;
  user2cookbook: string;

  ngOnInit(){
    this.restService.getUsers().subscribe( // TODO - all this will need to get broken out and not just exist in main app
      (resp) =>
        {
          console.log("all user load good, full resp: " + JSON.stringify(resp));
          this.users = resp[0];
          this.isError = false;
        },
      (error) =>
        {
          console.log("No user Data Found" + JSON.stringify(error));
          this.isError = true;
          this.users = "";//[new User()];
        }
    );

    this.restService.getFirstTableData().subscribe(
      (resp) =>  
        {
          console.log("firstTableAll load good, full resp: " + JSON.stringify(resp));
          this.firstTableAll = resp[0];
        },
      (error) =>
        {
          console.log("No firstTableAll Data Found" + JSON.stringify(error));

          this.firstTableAll = error.text ?? 'firstTableAll error';
        }
    );

    this.restService.getUser2Cookbook().subscribe(
      (resp) =>  
        {
          console.log("user2 cookbook load good, full resp: " + JSON.stringify(resp));
          this.user2cookbook = resp[0];
        },
      (error) =>
        {
          console.log("No user2 cookbook Data Found" + JSON.stringify(error));

          this.user2cookbook = error.text ?? 'user2 cookbook error';
        }
    );
  }

  public get allUsers(): any {
    if (this.users) { return this.users; }
    if (this.isError) {return ['Error generated, check log']; }
    return ['No Users Init'];
  }

  public get firstTableAllStr(): any {
    return this.firstTableAll;
  }

  public get user2CookbookStr(): any {
    return this.user2cookbook;
  }
}
