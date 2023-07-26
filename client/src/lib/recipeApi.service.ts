import { Recipe } from "./recipe.interface";

class RecipeApiService {
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
    return this.sanitizeRecipes(data.message);
  }


  private sanitizeRecipes(recipes: Recipe[]) {
    return recipes.map((recipe) => this.sanitizeRecipe(recipe));
  }
  private sanitizeRecipe(recipe: Recipe) {
    return {
      ...recipe,
      difficulty: this.sanitizeDifficulty(recipe.difficulty),
      volume: this.sanitizeVolume(recipe.volume),
      serves: this.sanitizeServes(recipe.serves)
    }
  }
  private sanitizeDifficulty(difficulty: number) {
    if ([0, 1, 2].indexOf(difficulty) === -1) {
      return 1; // use "medium" if difficulty is invalid
    }
    return difficulty;
  }
  private sanitizeVolume(volume: number) {
    return Math.max(0, volume);
  }
  private sanitizeServes(serves: number) {
    return Math.max(0, serves);
  }
}

export const recipeApiService = new RecipeApiService();