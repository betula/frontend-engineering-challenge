import { makeObservable, observable } from "mobx";
import { recipeApiService } from "./recipeApi.service";

class SearchSuggestions {
  _search = '';

  get search() {
    return this._search;
  }
  set search(value: string) {
    this._search = value;

    recipeApiService.search(this.search);
  }

  setSearch = (value: string) => {
    this.search = value;
  }

  constructor() {
    makeObservable(this, {
      _search: observable.ref
    });
  }
}

export const searchSuggestionsService = new SearchSuggestions();