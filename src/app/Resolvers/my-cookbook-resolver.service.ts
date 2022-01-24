import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookbook } from '../Models/cookbook';
import { RestService } from '../Services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class MyCookbookResolverService  implements Resolve<Observable<Cookbook>> {

  constructor(private restService: RestService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cookbook> | Observable<Observable<Cookbook>> | Promise<Observable<Cookbook>> {
    throw new Error("Method not implemented."); // TODO build rest service calls to make this work
  }
}
