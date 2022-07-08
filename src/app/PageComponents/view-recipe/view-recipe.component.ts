import { Component, OnInit } from '@angular/core';
import { UserSessionkeyResolverService } from 'src/app/Resolvers/user-sessionkey-resolver.service';
import { RecipeResolverService } from 'src/app/Resolvers/recipe-resolver.service';
import { User } from 'src/app/Models/user';
import { Recipe } from 'src/app/Models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  constructor(private userSessionkeyResolver : UserSessionkeyResolverService, // TODO - maybe make a logged in page base that includes this to always make user info available
              private recipeResolverService: RecipeResolverService,
              private router: Router) { 
  }

  ngOnInit(): void {
  }

  public get userInfo(): User | undefined {
    return this.userSessionkeyResolver.userInfo;
  }
  public get usersName(): string {
    return this.userInfo ? this.userInfo.full_name : '';
  }
  public get userId(): number {
    return this.userInfo.id ?? -1;
  }

  public get recipe(): Recipe | undefined {
    return this.recipeResolverService.recipe;
  }
  public get recipeName(): string {
    return this.recipe?.name;
  }
  public get recipeIngredients(): string {
    return this.recipe?.ingredients;
  }
  public get recipeDirections(): string {
    return this.recipe?.directions;
  }


  public onShare(): void {
    console.log('share functionality not implemented')
  }

  public onBackToCookbbok(): void {
    this.router.navigate(["view-my-cookbook", this.userId], {state: {cookbookId: this.recipe.cookbookId}} ); 
  }
}
