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

  constructor() {}


  ngOnInit(){
  }
}
