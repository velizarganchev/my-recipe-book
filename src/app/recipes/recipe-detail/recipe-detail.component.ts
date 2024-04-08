import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {
  panelOpenState = false;
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  onAddIngredients() {
    this.recipeService.addIngredientsToSl(this.recipe.ingredients);
  }
}
