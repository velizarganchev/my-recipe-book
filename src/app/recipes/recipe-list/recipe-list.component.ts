import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  userSub: Subscription;

  constructor(
    private recipeService: RecipesService,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {

    this.userSub = this.authService.user.subscribe((user) => {
      if (user) {
        this.dataStorageService.fetchRecipes().subscribe();
      }
    });

    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getAllRecipes();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.subscription.unsubscribe();
  }
}
