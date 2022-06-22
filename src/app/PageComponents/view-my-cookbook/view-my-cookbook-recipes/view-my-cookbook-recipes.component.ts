import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../../Models/recipe';

@Component({
  selector: 'app-view-my-cookbook-recipes',
  templateUrl: './view-my-cookbook-recipes.component.html',
  styleUrls: ['./view-my-cookbook-recipes.component.css']
})
export class ViewMyCookbookRecipesComponent implements OnInit {
  @Input() recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public get hasRecipes(): boolean {
    return this.recipes.length > 0;
  }

}
