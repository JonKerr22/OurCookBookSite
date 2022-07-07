import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/Models/user';
import { UserSessionkeyResolverService } from 'src/app/Resolvers/user-sessionkey-resolver.service';
import { Router, Navigation } from '@angular/router';
import { RestService } from 'src/app/Services/rest.service';
import { AddRecipeResponse } from 'src/app/Responses/add-recipe-response';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.css']
})
export class AddNewRecipeComponent implements OnInit { // TODO - make sure the route for this page is set up right

  public ingredientText: string = "";
  public directionsText: string = "";
  public recipeName : string = "";
  public cookbookId: number = -1;

  constructor(private userSessionkeyResolver : UserSessionkeyResolverService,
              private router: Router,
              private restService: RestService) {

    const nav: Navigation = this.router.getCurrentNavigation();
    if (nav.extras && nav.extras.state && nav.extras.state.cookbookId){
      this.cookbookId = +nav.extras.state.cookbookId;
    }
    if(this.cookbookId === -1) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
  }

  public get userInfo(): User | undefined {
    return this.userSessionkeyResolver.userInfo;
  }
  public get usersName(): string {
    return this.userInfo ? this.userInfo.full_name : '';
  }

  public onAddRecipe(): void {
    if(!this.recipeName){
      alert('Please enter a recipe name'); // TODO - better alert
      return;
    }
    this.restService.addRecipe(this.cookbookId, this.userInfo.id, this.recipeName, this.directionsText, this.ingredientText).subscribe((x) => {
      const resp: AddRecipeResponse = new AddRecipeResponse(x);
      
      if(!resp.valid){
        alert('recipe not added');
        window.location.reload(); // TODO - this should be better
      }
      else {
        //console.log(`successfully added in new recipe with id: ${resp.id}`);
        this.router.navigate(["view-recipe", resp.id] );

      }
      
    });
  }
}
