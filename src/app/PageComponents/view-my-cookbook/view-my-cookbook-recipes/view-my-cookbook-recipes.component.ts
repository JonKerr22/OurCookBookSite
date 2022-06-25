import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../../Models/recipe';

@Component({
  selector: 'app-view-my-cookbook-recipes',
  templateUrl: './view-my-cookbook-recipes.component.html',
  styleUrls: ['./view-my-cookbook-recipes.component.css']
})
export class ViewMyCookbookRecipesComponent implements OnInit {
  @Input() recipes: Recipe[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public get hasRecipes(): boolean {
    return this.recipes.length > 0;
  }


  public onAddNewRecipe(): void {
    this.router.navigate(["add-recipe"] ); 

  }

}
