import { makeObservable, observable } from "mobx";
import { Recipe } from "./recipe.interface";

const LOCAL_STORAGE_KEY = '__yum_raw_recipe';

class CurrentRecipeService {
  _recipe?: Recipe;
  
  get recipe(): Recipe | undefined {
    return this._recipe;
  }
  set recipe(recipe: Recipe) {
    this._recipe = recipe;
    this.trySave();
  }

  constructor() {
    makeObservable(this, {
      _recipe: observable.ref
    });

    this.tryLoad();
  }

  tryLoad() {
    try {
      const rawData = typeof localStorage !== 'undefined' && localStorage?.getItem(LOCAL_STORAGE_KEY);
      if (!rawData) return;

      const recipe = JSON.parse(rawData);
      if (recipe) {
        this.recipe = recipe;
      }
    }
    catch { /* empty */ }
  }

  trySave() {
    try {
      const rawData = JSON.stringify(this.recipe);
      if (typeof localStorage !== 'undefined') {
        localStorage?.setItem(LOCAL_STORAGE_KEY, rawData);
      }
    }
    catch { /* empty */ }
  }
}

export const currentRecipeService = new CurrentRecipeService();