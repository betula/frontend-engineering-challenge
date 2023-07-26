import { makeObservable, observable } from "mobx";
import { Recipe } from "./recipe.interface";

class CurrentRecipeService {
  recipe?: Recipe;
  
  constructor() {
    makeObservable(this, {
      recipe: observable.ref
    });

    this.recipe = {
      name: 'Spanish Paella',
      description: 'Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.',
      protein: 'Jumbo Shrimp',
      produce: 'Tomatoes',
      spice: 'Safron',
      cookingOil: 'Spanish Olive Oil',
      volume: 700,
      serves: 4,
      stock: 'Chicken',

      origin: 'ES',
      difficulty: 1,
      authenticity: 'Unverified'
    }
  }
}

export const currentRecipeService = new CurrentRecipeService();