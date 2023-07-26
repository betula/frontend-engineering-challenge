import { makeObservable, observable } from "mobx";
import { toast } from "react-toastify";
import { FormGroupControl } from "../../lib/form/FormGroupControl";
import { requiredValidator } from "../../lib/form/validator/required";
import { numberValidator } from "../../lib/form/validator/number";
import { recipeApiService } from "../../lib/recipeApi.service";

import countryOptions from "../../lib/dictionary/country.json";
import difficultyOptions from "../../lib/dictionary/difficulty.json";
import authenticityOptions from "../../lib/dictionary/authenticity.json";
import { Recipe } from "../../lib/recipe.interface";
import { currentRecipeService } from "../../lib/currentRecipe.service";

export class RecipeFormLogic {

  options = {
    origin: countryOptions,
    difficulty: difficultyOptions,
    authenticity: authenticityOptions,
  }

  group = new FormGroupControl({
    name: ['', requiredValidator],
    description: '',
    protein: '',
    produce: '',
    spice: '',
    cookingOil: '',
    volume: ['', numberValidator],
    serves: ['', numberValidator],
    stock: '',

    origin: '',
    difficulty: '0',
    authenticity: 'Verified'
  });

  pending = false;

  constructor() {
    makeObservable(this, {
      pending: observable.ref
    })
  }

  doFinish(recipe: Recipe, message: string) {
    toast.success(message);
    currentRecipeService.recipe = recipe;

    history.back();
  }
  doError(message: string) {
    toast.error(message);
  }
  doInvalid() {
    toast.error('Not all form fields filled correctly');
  }

  async submit() {
    if (this.pending) return;

    this.group.validate();
    if (this.group.invalid) {
      this.doInvalid();
      return;
    }

    const value = this.group.value;

    const recipe: Recipe = {
      ...value,
      difficulty: parseInt(value.difficulty),
      volume: parseInt(value.volume) || 0,
      serves: parseInt(value.serves) || 0,
    }

    try {
      this.pending = true;
      const message = await recipeApiService.publish(recipe);
      this.doFinish(recipe, message);
    }
    catch (e) {
      console.error(e);
      this.doError('Server answered with error');
    }
    finally {
      this.pending = false;
    }
  }

}