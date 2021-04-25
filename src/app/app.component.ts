import { Component, OnInit } from '@angular/core';

import { RestService } from './Services/rest.service';
import { User } from './Models/user';
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
  usersObj: any;
  isError: boolean;
  codezUpStr: string;

  ngOnInit(){
    this.restService.getUsers().subscribe( // TODO - all this will need to get broken out and not just exist in main app
      (response) =>
        {
          this.users = JSON.stringify(response);
          this.usersObj = response;
          this.isError = false;
        },
      (error) =>
        {
          console.log("No user Data Found" + JSON.stringify(error));
          this.isError = true;
          this.users = "";//[new User()];
        }
    );

    this.restService.getCodezUp().subscribe(
      (resp) =>  
        {
          console.log("CodezUp load good, full resp: " + JSON.stringify(resp));
          this.codezUpStr = resp[0];
        },
      (error) =>
        {
          console.log("No codezup Data Found" + JSON.stringify(error));

          this.codezUpStr = error.text ?? 'Codez up error';
        }
    );
  }

  public get allUsers(): any {
    if (this.users) { return this.users; }
    if (this.isError) {return ['Error generated, check log']; }
    return ['No Users Init'];
  }

  private userArrToStr(users: [User]): string {
    var resp = "";
    


    return resp;
  }

  public get codezUpCheck(): any {
    return this.codezUpStr;
  }
}
