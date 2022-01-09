import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  public onLogin(): void {
    console.log('login btn go');
    if(!this.username || !this.password){
      console.log('form incomplete');
      return;
    }
    const loginResp = this.restService.confirmLogin(this.username, this.password);
    loginResp.subscribe(
      x => console.log(`login resp has values: ${JSON.stringify(x)}`)
    );
    // TODO - should go somewhere after successful login
  }

}
