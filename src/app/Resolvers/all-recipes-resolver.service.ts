import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Navigation, Router } from '@angular/router';
import { RestService } from '../Services/rest.service';
import { Recipe } from '../Models/recipe';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesResolverService  implements Resolve<any>  {

  constructor(private restService: RestService,
              private router: Router) { }

  public recipeList: Recipe[] = [];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {

    const nav: Navigation = this.router.getCurrentNavigation();
    let cookbookId: number = -1;
    if (nav.extras && nav.extras.state && nav.extras.state.cookbookId){
      cookbookId = +nav.extras.state.cookbookId;
    }
    if(cookbookId === -1) { //maybe have it check for a route parameter also? idk
      console.log('neg 1 cookbook');
      this.recipeList = [];
      return of(false);
    }
    this.restService.getAllCookbookRecipes(cookbookId).subscribe((pythonResp: Array<any>) => {
      

      if(pythonResp.length > 0 && !pythonResp[0]) { //empty response
        this.recipeList = [];
        return of(false);
      }
      this.recipeList = [];
      for(const idx in pythonResp){
        this.recipeList.push(new Recipe(pythonResp[idx]));
      }
      return of(true);
    });
  }
}
