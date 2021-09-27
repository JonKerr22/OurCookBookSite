import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './Services/rest.service';
import { HomePageComponent } from './PageComponents/home-page/home-page.component';
import { AllCookbooksComponent } from './PageComponents/all-cookbooks/all-cookbooks.component';
import { ViewMyCookbookComponent } from './PageComponents/view-my-cookbook/view-my-cookbook.component';
import { LoginComponent } from './PageComponents/login/login.component';
import { ViewRecipeComponent } from './PageComponents/view-recipe/view-recipe.component';

@NgModule({
  declarations: [ // TODO - don't just have everything declared at the app level, split it up some
    AppComponent,
    HomePageComponent,
    AllCookbooksComponent,
    ViewMyCookbookComponent,
    LoginComponent,
    ViewRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
