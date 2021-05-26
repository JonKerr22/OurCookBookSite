import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Models/user';
import { FirstTableObj } from '../Models/firstTableObj';
import { Cookbook } from '../Models/cookbook';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {
  apiUrlBase = environment.apiUrl ? environment.apiUrl : 'http://localhost:5000'; // for now default to localhost, no test or prod env

  constructor(private httpClient: HttpClient ) {
  }

  ngOnInit() {
  }

  getUsers(): Observable<User[]> {
    const usersUrl = `${this.apiUrlBase}/allUsers`;
    return this.httpClient.get<User[]>(usersUrl);
  }

  getFirstTableData(): Observable<FirstTableObj[]> {
    const firstTableUrl = `${this.apiUrlBase}/firstTableAll`;
    return this.httpClient.get<FirstTableObj[]>(firstTableUrl);
  }

  getUser2Cookbook(): Observable<Cookbook> {
    const user2cookbookUrl = `${this.apiUrlBase}/cookbook/2`;
    return this.httpClient.get<Cookbook>(user2cookbookUrl);
  }

}
