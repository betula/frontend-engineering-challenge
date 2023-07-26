import { makeObservable, observable } from "mobx";
import { toast } from "react-toastify";
import { FormGroupControl } from "../../lib/form/FormGroupControl";
import { requiredValidator } from "../../lib/form/validator/required";
import { numberValidator } from "../../lib/form/validator/number";
import { recipeApi } from "../../lib/recipeApi";

import countryOptions from "../../lib/dictionary/country.json";
import difficultyOptions from "../../lib/dictionary/difficulty.json";
import authenticityOptions from "../../lib/dictionary/authenticity.json";

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

  doFinish() {
    toast.success('Recipe published');
    history.back();
  }

  async submit() {
    if (this.pending) return;

    this.group.validate();
    if (this.group.invalid) return;

    const value = this.group.value;

    try {
      this.pending = true;
      await recipeApi.publish(value);
      this.doFinish();
    }
    finally {
      this.pending = false;
    }
  }

}