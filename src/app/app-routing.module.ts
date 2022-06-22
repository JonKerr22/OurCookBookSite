import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './PageComponents/home-page/home-page.component';
import { MyCookbookResolverService } from './Resolvers/my-cookbook-resolver.service';
import { LoginComponent } from './PageComponents/login/login.component';
import { ViewMyCookbookComponent } from './PageComponents/view-my-cookbook/view-my-cookbook.component';
import { AuthGuard } from './Guards/auth.guard';
import { UserSessionkeyResolverService } from './Resolvers/user-sessionkey-resolver.service';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'view-my-cookbook/:userId', component: ViewMyCookbookComponent,
                            canActivate : [AuthGuard], 
                            resolve: { userInfo: UserSessionkeyResolverService,
                                       cookbook: MyCookbookResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
