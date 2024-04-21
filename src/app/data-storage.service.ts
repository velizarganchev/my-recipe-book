import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from './recipes/recipes.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getAllRecipes();

    this.http
      .put(
        'https://koch-welt-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
