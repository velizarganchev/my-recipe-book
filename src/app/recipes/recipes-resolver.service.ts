import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../data-storage.service";

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DataStorageService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Recipe[]> {
        return this.dataStorageService.fetchRecipes();
    }
}