import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RestService } from '../Services/rest.service';
import { Recipe } from '../Models/recipe';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<any>  {

  constructor(private restService: RestService) { }

  public recipe: Recipe | undefined;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    const recipeId: number = +route.paramMap.get('recipeId');
    this.restService.getRecipe(recipeId).subscribe((pythonResp: Array<any>) => {

      if(pythonResp.length > 0 && !pythonResp[0]) { //empty response
        this.recipe = null;
        return of(false);
      }
      
      this.recipe = new Recipe(pythonResp[0]);
      return of(true);
    });
  }
}
