import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from './recipes/recipes.service';
import { Recipe } from './recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { ShoppinListService } from './shopping-list/shoppin-list.service';
import { Ingredient } from './shared/ingredient.model';
import { AuthService } from './auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipesService,
    private shopingListService: ShoppinListService,
    private authService: AuthService
  ) { }

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

  fetchRecipes() {
    return this.authService.user
      .pipe(take(1), exhaustMap(user => {
        return this.http.get<Recipe[]>('https://koch-welt-default-rtdb.europe-west1.firebasedatabase.app/recipes.json?auth=' + user.token, // entweder so oder mit HttpParams 
          // {
          //   params: new HttpParams().set('auth', user.token)
          // }
        )
      }),
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
          })
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        }))
  }

  storeIngredients() {
    const ingredients = this.shopingListService.getAllIngredients();

    this.http
      .put(
        'https://koch-welt-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
        ingredients
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchShoppinList() {
    return this.http.get<Ingredient[]>('https://koch-welt-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json').pipe(
      tap(ingredients => {
        this.shopingListService.setIngredients(ingredients ? ingredients : []);
      })
    );
  }
}
