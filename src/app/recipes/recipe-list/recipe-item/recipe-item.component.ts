import { Component, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {

  @Input('srRecipe') recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
