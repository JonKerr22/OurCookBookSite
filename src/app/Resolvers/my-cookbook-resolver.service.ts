import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cookbook } from '../Models/cookbook';
import { RestService } from '../Services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class MyCookbookResolverService  implements Resolve<any> {

  constructor(private restService: RestService) { }

  public cookbookInfo: Cookbook | undefined;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    const userId: number = +route.paramMap.get('userId');
    this.restService.getUserCookbook(userId).subscribe((pythonResp: Array<any>) => {

      if(pythonResp.length > 0 && !pythonResp[0]) { //empty response
        this.cookbookInfo = null;
        return of(false);
      }
      
      const userCookbook = new Cookbook(pythonResp[0]);
      this.cookbookInfo = userCookbook;
      return of(true);
    });
  }
}
