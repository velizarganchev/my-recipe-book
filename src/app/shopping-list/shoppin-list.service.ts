// import { Injectable } from '@angular/core';

import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppinListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Salz', 5),
    new Ingredient('Appfel', 2),
    new Ingredient('Tomaten', 1),
  ];

  getAllIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
