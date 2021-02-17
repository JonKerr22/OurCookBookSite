import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {

  constructor(private httpClient: HttpClient ) {
  }

  ngOnInit() {
  }

  getUsers(): Observable<any> {
    const usersUrl = 'http://127.0.0.1:5000/allUsers';
    return this.httpClient.get(usersUrl);
  }

  getCodezUp() {
    const url = 'http://127.0.0.1:5000/';
    return this.httpClient.get(url);
  }

}
