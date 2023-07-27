import { makeObservable, observable } from "mobx";
import debounce from "lodash/debounce";
import { recipeApiService } from "./recipeApi.service";
import { Recipe } from "./recipe.interface";
import { currentRecipeService } from "./currentRecipe.service";

const WAIT_TIME = 250;
const MAX_WAIT_TIME = 300;

class SearchSuggestionsService {
  private stopped = false;

  _search = '';

  get search() {
    return this._search;
  }
  set search(value: string) {
    this._search = value;

    if (!value) {
      this.clear();
    }
    else {
      this.stopped = false;
      this.debouncedLoad();
    }
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
    this.debouncedLoad.cancel();
    this.stopped = true;
  }

  pick(recipe: Recipe) {
    this.clear();
    currentRecipeService.recipe = recipe;
  }

  debouncedLoad = debounce(
    () => this.load(),
    WAIT_TIME,
    { maxWait: MAX_WAIT_TIME }
  )

  private async load() {
    try {
      const suggestions = await recipeApiService.search(this.search);
      if (!this.stopped) {
        this.suggestions = suggestions;
      }
    }
    catch { /* empty */ }
  }
}

export const searchSuggestionsService = new SearchSuggestionsService();