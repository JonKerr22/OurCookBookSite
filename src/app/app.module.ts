import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RestService } from './Services/rest.service';
import { AuthService } from './Services/auth.service';
import { AppComponent } from './app.component';
import { HomePageComponent } from './PageComponents/home-page/home-page.component';
import { ViewMyCookbookComponent } from './PageComponents/view-my-cookbook/view-my-cookbook.component';
import { LoginComponent } from './PageComponents/login/login.component';
import { ViewRecipeComponent } from './PageComponents/view-recipe/view-recipe.component';
import { HeaderComponent } from './PageComponents/shared/header/header.component';
import { FooterComponent } from './PageComponents/shared/footer/footer.component';
import { AuthGuard } from './Guards/auth.guard';
import { ViewMyCookbookRecipesComponent } from './PageComponents/view-my-cookbook/view-my-cookbook-recipes/view-my-cookbook-recipes.component'

@NgModule({
  declarations: [ // TODO - don't just have everything declared at the app level, split it up some
    AppComponent,
    HomePageComponent,
    ViewMyCookbookComponent,
    LoginComponent,
    ViewRecipeComponent,
    HeaderComponent,
    FooterComponent,
    ViewMyCookbookRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
