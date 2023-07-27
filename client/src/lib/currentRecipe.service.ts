import { makeObservable, observable } from "mobx";
import { Recipe } from "./recipe.interface";

class CurrentRecipeService {
  recipe?: Recipe;
  
  constructor() {
    makeObservable(this, {
      recipe: observable.ref
    });
  }
}

export const currentRecipeService = new CurrentRecipeService();