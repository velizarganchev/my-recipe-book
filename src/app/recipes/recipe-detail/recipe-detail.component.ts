import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
  panelOpenState = false;
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipesService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onAddIngredients() {
    this.recipeService.addIngredientsToSl(this.recipe.ingredients);
    this.dataStorageService.storeIngredients();
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
