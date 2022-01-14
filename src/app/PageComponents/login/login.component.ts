import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/Services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private restService: RestService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public onLogin(): Promise<void> {
    if(!this.username || !this.password){
      console.log('form incomplete'); // TODO - alert or form indicated
      return;
    }
    const loginResp =  this.restService.confirmLogin(this.username, this.password);
    loginResp.subscribe((x) => {
      let loginSuccess: boolean = x;

      if(!loginSuccess) {
        console.log('failed login'); // TODO - alert or form indicated
        return ;
      }
      this.router.navigate(["view-my-cookbook"]);
    });
  }

}
