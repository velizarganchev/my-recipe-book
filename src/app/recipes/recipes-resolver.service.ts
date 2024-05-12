import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../data-storage.service";
import { RecipesService } from "./recipes.service";

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Recipe[]> {
        const recipes = this.recipeService.getAllRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        } else {
            recipes;
        }
    }
}