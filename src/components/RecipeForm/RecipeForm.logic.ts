import { FormGroupControl } from "../../lib/form/FormGroupControl";
import countryOptions from "../../lib/dictionary/country.json";
import difficultyOptions from "../../lib/dictionary/difficulty.json";
import authenticityOptions from "../../lib/dictionary/authenticity.json";
import { requiredValidator } from "../../lib/form/validator/required";
import { numberValidator } from "../../lib/form/validator/number";

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


  submit() {
    this.group.validate();
    const value = this.group.value;

    alert(
      JSON.stringify(value)
    )
  }

}