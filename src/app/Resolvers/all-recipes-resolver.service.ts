import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RestService } from '../Services/rest.service';
import { Recipe } from '../Models/recipe';
import { of, Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesResolverService  implements Resolve<any>  {

  constructor(private restService: RestService) { }

  public recipeList: Recipe[] = [];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    // TODO - unsure how to go about using this honestly
    console.log(`route info: ${route}\n\nstate info: ${state}`);
    /*if (route.){
      this.cookbookId = +nav.extras.state.cookbookId;
    }*/

    return of(true);
  }

  public refreshList(cookbookId: number): void { //TODO - possible that this will get removed and this whole thing gets redone
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
