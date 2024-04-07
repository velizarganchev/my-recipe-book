import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Pile s oris',
      'Pe4e se vav furna',
      'https://m5.netinfo.bg/media/images/34294/34294267/960-540-pile-s-oriz.jpg'
    ),
    new Recipe(
      'Pile s kartofi',
      'Pe4e se vav furna',
      'https://m5.netinfo.bg/media/images/34294/34294267/960-540-pile-s-oriz.jpg'
    ),
  ];

  onRecipeSelected(recepieSelected: Recipe) {
    this.selectedRecipe.emit(recepieSelected);
  }
}
