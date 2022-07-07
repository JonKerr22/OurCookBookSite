import { Component, OnInit } from '@angular/core';

import { UserSessionkeyResolverService } from '../../Resolvers/user-sessionkey-resolver.service';
import { MyCookbookResolverService } from 'src/app/Resolvers/my-cookbook-resolver.service';
import { User } from 'src/app/Models/user';
import { Recipe } from 'src/app/Models/recipe';
import { RestService } from 'src/app/Services/rest.service';
import { Cookbook } from 'src/app/Models/cookbook';
import { AllRecipesResolverService } from 'src/app/Resolvers/all-recipes-resolver.service';

@Component({
  selector: 'app-view-my-cookbook',
  templateUrl: './view-my-cookbook.component.html',
  styleUrls: ['./view-my-cookbook.component.css']
})
export class ViewMyCookbookComponent implements OnInit {

  protected newCookBookName: string;

  constructor(private userSessionkeyResolver : UserSessionkeyResolverService, // TODO - maybe make a logged in page base that includes this to always make user info available
              private myCookbookResolverService: MyCookbookResolverService,
              private restService: RestService,
              private allRecipesResolver: AllRecipesResolverService) { }


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
  public get hasCookbook(): boolean {
    return !!this.cookbook;
  }
  public get cookbook(): Cookbook {
    return this.myCookbookResolverService.cookbookInfo;
  }
  public get cookbookName(): string {
    return this.cookbook.cookbook_name;
  }
  public get allRecipes(): Recipe[] {
    return this.allRecipesResolver.recipeList;
  }

  public onRefreshRecipes(): Promise<void> { // TODO - cannot be permanent solution
    this.allRecipesResolver.refreshList(this.cookbook.id);
    return;
  }

  public onCreateCookbook(): Promise<void> {
    if(!this.newCookBookName){
      alert('Please enter a cookbook name'); // TODO - better alert
      return;
    }
    this.restService.addCookbook(this.newCookBookName, this.userId).subscribe((x) => { 
      console.log('response: ', x);
      if(x) {
        console.log('cookbook create success'); //do i need to do more?
        //todo make this actually good, possibly re-run resolver? idk
        window.location.reload()
        return;
      }
      console.log('cookbook create failed');// do i need to do more?
      return;
    });

    return;
  }

}
