import { Recipe } from "./recipe.interface";

class RecipeApi {
  readonly gateway = import.meta.env.VITE_API_GATEWAY;

  async publish(recipe: Recipe): Promise<string> {
    const response = await fetch(this.gateway + '/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });
    if (response.status !== 201) {
      throw new Error('Server answered with error');
    }
    const data = await response.json();
    return data.message;
  }

  async search(query: string): Promise<Recipe[]> {
    const url = this.gateway + '/search?query=' + encodeURIComponent(query);
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error('Server answered with error');
    }
    const data = await response.json();
    return data.message;
  }

}

export const recipeApiService = new RecipeApi();