import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/Models/user';
import { UserSessionkeyResolverService } from 'src/app/Resolvers/user-sessionkey-resolver.service';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.css']
})
export class AddNewRecipeComponent implements OnInit { // TODO - make sure the route for this page is set up right

  public ingredientText: string = "";
  public directionsText: string = "";
  public recipeName : string = "";

  constructor(private userSessionkeyResolver : UserSessionkeyResolverService) { }

  ngOnInit(): void {
  }


  public get userInfo(): User | undefined {
    return this.userSessionkeyResolver.userInfo;
  }
  public get usersName(): string {
    return this.userInfo ? this.userInfo.full_name : '';
  }

  public onAddRecipe(): void {
    console.log(`new name: ${this.recipeName}, ingre: ${this.ingredientText}, dire: ${this.directionsText}`);
  }
}
