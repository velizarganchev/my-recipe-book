// import { Injectable } from '@angular/core';

import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

// @Injectable({
//   providedIn: 'root'
// })
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pile s oris',
      'Pe4e se vav furna',
      'https://m5.netinfo.bg/media/images/34294/34294267/960-540-pile-s-oriz.jpg',
      [
        new Ingredient('Pile', 1),
        new Ingredient('Oris', 200),
      ]
    ),
    new Recipe(
      'Pile s kartofi',
      'Pe4e se vav furna',
      'https://m5.netinfo.bg/media/images/34294/34294267/960-540-pile-s-oriz.jpg',
      [
        new Ingredient('Pile', 1),
        new Ingredient('Kartofi', 20),
      ]
    ),
  ];

  getAllRecipes() {
    return this.recipes.slice();
  }
}
