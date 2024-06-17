import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipes-ingredients-chips',
  templateUrl: './recipes-ingredients-chips.component.html',
  styleUrl: './recipes-ingredients-chips.component.scss'
})
export class RecipesIngredientsChipsComponent implements OnInit {
  @Input() ingredients: Ingredient[];

  ngOnInit(): void {
    console.log(this.ingredients);

  }


}
