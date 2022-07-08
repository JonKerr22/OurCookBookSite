import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './PageComponents/home-page/home-page.component';
import { MyCookbookResolverService } from './Resolvers/my-cookbook-resolver.service';
import { LoginComponent } from './PageComponents/login/login.component';
import { ViewMyCookbookComponent } from './PageComponents/view-my-cookbook/view-my-cookbook.component';
import { AuthGuard } from './Guards/auth.guard';
import { UserSessionkeyResolverService } from './Resolvers/user-sessionkey-resolver.service';
import { AddNewRecipeComponent } from './PageComponents/add-new-recipe/add-new-recipe.component';
import { RecipeResolverService } from './Resolvers/recipe-resolver.service';
import { ViewRecipeComponent } from './PageComponents/view-recipe/view-recipe.component';
import { AllRecipesResolverService } from './Resolvers/all-recipes-resolver.service';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent}, // TODO - need to add in guard for if user is already logged in
  { path: 'view-my-cookbook/:userId', component: ViewMyCookbookComponent,
                            canActivate : [AuthGuard], 
                            resolve: { userInfo: UserSessionkeyResolverService,
                                       cookbook: MyCookbookResolverService,
                                       recipeList: AllRecipesResolverService}
  },
  { path: 'add-recipe', component: AddNewRecipeComponent,
                            canActivate : [AuthGuard], 
                            resolve: { userInfo: UserSessionkeyResolverService }
  },
  { path: 'view-recipe/:recipeId', component: ViewRecipeComponent,
                             //canActivate : [AuthGuard], // TODO - shouldnt need to be logged in to view 1 recipe? 
                            resolve: { userInfo: UserSessionkeyResolverService,
                                       recipe: RecipeResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
