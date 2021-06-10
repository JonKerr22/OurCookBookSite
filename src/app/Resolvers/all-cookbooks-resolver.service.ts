import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookbook } from '../Models/cookbook';
import { RestService } from '../Services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AllCookbooksResolver implements Resolve<Cookbook[]> {

  // public resolvedData: Cookbook[];

  constructor(private restService: RestService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cookbook[]> {
      return this.restService.getCookBooks();
  }
}
