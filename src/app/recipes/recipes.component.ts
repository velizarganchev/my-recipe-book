import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  providers: [],
})
export class RecipesComponent implements OnInit {
  recipeToShow: Recipe;

  constructor() { }

  ngOnInit(): void {
  }
}
