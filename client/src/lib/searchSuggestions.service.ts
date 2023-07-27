import { makeObservable, observable } from "mobx";
import debounce from "lodash/debounce";
import { recipeApiService } from "./recipeApi.service";
import { Recipe } from "./recipe.interface";
import { currentRecipeService } from "./currentRecipe.service";

class SearchSuggestionsService {
  _search = '';

  get search() {
    return this._search;
  }
  set search(value: string) {
    this._search = value;

    this.load();
  }

  suggestions: Recipe[] = [];

  setSearch = (value: string) => {
    this.search = value;
  }

  constructor() {
    makeObservable(this, {
      _search: observable.ref,
      suggestions: observable.ref,
    });
  }

  clear() {
    this._search = '';
    this.suggestions = [];
  }

  pick(recipe: Recipe) {
    this.clear();
    currentRecipeService.recipe = recipe;
  }

  private async load() {
    try {
      this.suggestions = await recipeApiService.search(this.search);
    }
    catch { /* empty */ }
  }
}

export const searchSuggestionsService = new SearchSuggestionsService();