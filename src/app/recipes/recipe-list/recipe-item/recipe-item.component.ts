import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input('srRecipe') recipe: Recipe;
  @Output() recepieSelected = new EventEmitter<void>();

  onSelected() {
    this.recepieSelected.emit();
  }
}
