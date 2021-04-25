import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Models/user';
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

  getUsers(): Observable<any> {
    const usersUrl = `${this.apiUrlBase}/allUsers`;
    return this.httpClient.get(usersUrl);
  }

  getCodezUp() {
    const url = `${this.apiUrlBase}/`;
    return this.httpClient.get(url);
  }

}
