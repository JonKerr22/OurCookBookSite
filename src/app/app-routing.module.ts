import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './PageComponents/home-page/home-page.component';
import { AllCookbooksComponent } from './PageComponents/all-cookbooks/all-cookbooks.component';
import { AllCookbooksResolver } from './Resolvers/all-cookbooks-resolver.service';
import { MyCookbookResolverService } from './Resolvers/my-cookbook-resolver.service';
import { LoginComponent } from './PageComponents/login/login.component';
import { ViewMyCookbookComponent } from './PageComponents/view-my-cookbook/view-my-cookbook.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'view-my-cookbook', component: ViewMyCookbookComponent, resolve: {cookbook: MyCookbookResolverService}},
  { path: 'allcookbooks', component: AllCookbooksComponent, resolve: {cookbooks: AllCookbooksResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
