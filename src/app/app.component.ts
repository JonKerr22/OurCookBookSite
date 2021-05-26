import { Component, OnInit } from '@angular/core';

import { RestService } from './Services/rest.service';
import { environment } from '../environments/environment'
import { User } from './Models/user';
import { FirstTableObj } from './Models/firstTableObj';
import { Cookbook } from './Models/cookbook';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OurCookBook';
  env = environment;

  constructor(private restService: RestService) {}

  users: User[];
  isError: boolean;
  firstTableAll: FirstTableObj[];
  user2cookbook: Cookbook;

  ngOnInit(){
    this.restService.getUsers().subscribe( // TODO - all this will need to get broken out and not just exist in main app
      (resp) =>
        {
          console.log(`all user load good, full resp:  ${resp}`);
          this.users = resp;
          this.isError = false;
        },
      (error) =>
        {
          console.log("No user Data Found" + JSON.stringify(error));
          this.isError = true;
          this.users = [];
        }
    );

    this.restService.getFirstTableData().subscribe(
      (resp) =>  
        {
          console.log("firstTableAll load good, full resp: " + JSON.stringify(resp));
          this.firstTableAll = resp;
        },
      (error) =>
        {
          console.log("No firstTableAll Data Found" + JSON.stringify(error));
          this.firstTableAll = [];
        }
    );

    this.restService.getUser2Cookbook().subscribe(
      (resp) =>  
        {
          console.log("user2 cookbook load good, full resp: " + JSON.stringify(resp));
          this.user2cookbook = resp;
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
    return [];
  }

  public get firstTableAllStr(): any {
    return this.firstTableAll;
  }

  public get user2CookbookStr(): Cookbook {
    if (this.user2cookbook) { return this.user2cookbook; }
    return null;
    
  }
}
