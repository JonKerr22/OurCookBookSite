import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { RestService } from '../Services/rest.service';
import { UserSessionKeyResponse } from '../Responses/user-sessionkey-confirm-response';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserSessionkeyResolverService implements Resolve<any> {

  constructor(private restService: RestService) { }

  public userInfo: User | undefined;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    const sessionKey = localStorage.getItem('key') ?? "";
    this.restService.checkUserSessionKey(sessionKey).subscribe((pythonResp) => {
      const resp = new UserSessionKeyResponse(pythonResp);
      this.userInfo = resp.userInfo;
      return of(true);
    });
  }
}
