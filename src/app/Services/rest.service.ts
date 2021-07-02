import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../Models/user';
import { FirstTableObj } from '../Models/firstTableObj';
import { Cookbook } from '../Models/cookbook';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RestService implements OnInit {
  private httpJsonOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private apiUrlBase = environment.apiUrl ? environment.apiUrl : 'http://localhost:5000'; // for now default to localhost, no test or prod env

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

  public getCookBook2(): Observable<Cookbook> {
    const user2cookbookUrl = `${this.apiUrlBase}/cookbook/2`;
    return this.httpClient.get<Cookbook>(user2cookbookUrl);
  }

  public getCookBooks(): Observable<Cookbook[]> {
    const allCookbooksUrl = `${this.apiUrlBase}/cookbooks`;
    return this.httpClient.get<Cookbook[]>(allCookbooksUrl);
  }

  public addUser1Cookbook(cookbookName: string): Observable<any> {
    const addBookUrl = `${this.apiUrlBase}/addUser1Cookbook`;
    return this.httpClient.post(addBookUrl, {cookbookName}, this.httpJsonOptions);
  }

  public deleteCookbook(cookbookId: number): Observable<any> {
    const url = `${this.apiUrlBase}/deleteCookbook`;
    return this.httpClient.post(url, {cookbookId}, this.httpJsonOptions);
  }

}
