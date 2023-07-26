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

  private async actualizeLoadedRecipes() {
    const quantity = await this.fetchRecipesNumber();
    if (quantity !== this.recipes.length) {
      this.recipes = await this.fetchRecipes();
    }
  }

  private async fetchRecipes(): Promise<Recipe[]> {
    const response = await fetch(this.gateway);
    const data = await response.json();
    const message = data?.message;
    if (!Array.isArray(message)) {
      throw new ServiceUnavailableException('fetch recipes');
    }
    return message;
  }
  private async fetchRecipesNumber(): Promise<number> {
    const response = await fetch(this.gateway + '/number');
    const data = await response.json();
    const message = data?.message;
    if (typeof message !== 'number') {
      throw new ServiceUnavailableException('fetch recipes number');
    }
    return message;
  }
}
