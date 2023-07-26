import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Recipe } from './recipe.interface';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];

  private get gateway() {
    const value = this.configService.get<string>('RECIPE_API_GATEWAY');
    if (!value) {
      throw new Error('.env RECIPE_API_GATEWAY not allowed');
    }
    return value;
  }

  constructor(private readonly configService: ConfigService) {}

  async search(query: string) {
    await this.actualizeLoadedRecipes();

    const lcQuery = query.toLowerCase();

    return this.recipes.filter((recipe) => {
      // search index
      const index = [
        recipe.name,
        recipe.description,
        recipe.protein,
        recipe.produce,
        recipe.spice,
        recipe.cookingOil,
        recipe.stock,
      ];

      return index.some((field) => field.toLowerCase().indexOf(lcQuery) !== -1);
    });
  }

  async publish(recipe: Recipe) {
    return this.postRecipe(recipe);
  }

  private async actualizeLoadedRecipes(force = false) {
    if (!force) {
      const quantity = await this.getRecipesNumber();
      force = quantity !== this.recipes.length;
    }
    if (force) {
      this.recipes = await this.getRecipes();
    }
  }

  private async getRecipes(): Promise<Recipe[]> {
    const response = await fetch(this.gateway);
    if (response.status !== 200) {
      throw new ServiceUnavailableException(
        'Get recipes gateway answered with error',
      );
    }
    const data = await response.json();
    const message = data?.message;
    if (!Array.isArray(message)) {
      throw new ServiceUnavailableException('Get recipes gateway unavailable');
    }
    return message;
  }

  private async getRecipesNumber(): Promise<number> {
    const response = await fetch(this.gateway + '/number');
    if (response.status !== 200) {
      throw new ServiceUnavailableException(
        'Get recipes number gateway answered with error',
      );
    }
    const data = await response.json();
    const message = data?.message;
    if (typeof message !== 'number') {
      throw new ServiceUnavailableException(
        'Get recipes number gateway unavailable',
      );
    }
    return message;
  }

  private async postRecipe(recipe: Recipe) {
    const response = await fetch(this.gateway, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });

    if (response.status !== 201) {
      throw new ServiceUnavailableException(
        'Post recipe gateway answered with error',
      );
    }
    const data = await response.json();
    const message = data?.message;
    if (!message) {
      throw new ServiceUnavailableException('Post recipe gateway unavailable');
    }
    return message;
  }
}
