import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../Models/user';
import { FirstTableObj } from '../Models/firstTableObj';
import { Cookbook } from '../Models/cookbook';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {
  private httpJsonOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private apiUrlBase = environment.apiUrl ? environment.apiUrl : 'http://localhost:5001'; // for now default to localhost, no test or prod env

  constructor(private httpClient: HttpClient ) {
  }

  ngOnInit() {
  }

  public getUsers(): Observable<User[]> {
    const usersUrl = `${this.apiUrlBase}/allUsers`;
    return this.httpClient.get<User[]>(usersUrl);
  }

  public getFirstTableData(): Observable<FirstTableObj[]> {
    const firstTableUrl = `${this.apiUrlBase}/firstTableAll`;
    return this.httpClient.get<FirstTableObj[]>(firstTableUrl);
  }

  public getCookBooks(): Observable<Cookbook[]> {
    const allCookbooksUrl = `${this.apiUrlBase}/cookbooks`;
    return this.httpClient.get<Cookbook[]>(allCookbooksUrl);
  }

  public addCookbook(cookbookName: string, userId: number): Observable<any> {
    const addBookUrl = `${this.apiUrlBase}/addCookbook`;
    return this.httpClient.post(addBookUrl, {cookbookName, userId}, this.httpJsonOptions);
  }

  public deleteCookbook(cookbookId: number): Observable<any> {
    const url = `${this.apiUrlBase}/deleteCookbook`;
    return this.httpClient.post(url, {cookbookId}, this.httpJsonOptions);
  }

  public registerUser(username: string, password: string): Observable<any> {
    const registerUserUrl = `${this.apiUrlBase}/registerUser`;
    return this.httpClient.post(registerUserUrl, {username, password}, this.httpJsonOptions);
  }

  public confirmLogin(username: string, password: string): Observable<any> {
    const registerUserUrl = `${this.apiUrlBase}/confirmLogin`;
    return this.httpClient.post(registerUserUrl, {username, password}, this.httpJsonOptions);
  }

  public checkUserSessionKey(sessionKey: string): Observable<any> {
    const registerUserUrl = `${this.apiUrlBase}/checkUserSessionKey`;
    return this.httpClient.post(registerUserUrl, {sessionKey}, this.httpJsonOptions);
  }

  public getUserCookbook(userId: number): Observable<any> {
    const registerUserUrl = `${this.apiUrlBase}/getUserCookbook`;
    return this.httpClient.post(registerUserUrl, {userId}, this.httpJsonOptions);
  }

}
