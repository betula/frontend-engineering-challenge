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
import { ValidatorErrors } from "../../lib/form/ValidatorErrors";

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

  doFinish(recipe: Recipe) {
    currentRecipeService.recipe = recipe;
    history.back();
  }

  informSuccess(message: string) {
    toast.success(message);
  }
  informError(message: string) {
    toast.error(message);
  }
  informInvalid() {
    toast.error('Not all form fields filled correctly');
  }

  async submit() {
    if (this.pending || this.group.invalid) return;

    this.group.validate();
    if (this.group.invalid) {
      this.informInvalid();
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
      this.informSuccess(message);
      this.doFinish(recipe);
    }
    catch (e) {
      if (e instanceof ValidatorErrors) {
        this.group.setErrors(e.errors);
        if (this.group.invalid) {
          this.informInvalid();
        }
      }
      else {
        console.error(e);
        this.informError('Server answered with error');
      }
    }
    finally {
      this.pending = false;
    }
  }

}