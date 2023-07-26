import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
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
    const response = await this.postRecipe(recipe);
    this.actualizeLoadedRecipesAfterPublish(recipe);
    return response;
  }

  private async actualizeLoadedRecipesAfterPublish(recipe: Recipe) {
    const quantity = await this.getRecipesNumber();
    if (this.recipes.length === quantity - 1) {
      this.recipes.push(recipe);
    } else {
      await this.actualizeLoadedRecipes(true);
    }
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
      throw new ServiceUnavailableException('Get recipes gateway unavailable');
    }
    const data = await response.json();
    return data.message;
  }

  private async getRecipesNumber(): Promise<number> {
    const response = await fetch(this.gateway + '/number');
    if (response.status !== 200) {
      throw new ServiceUnavailableException(
        'Get recipes number gateway unavailable',
      );
    }
    const data = await response.json();
    return data.message;
  }

  private async postRecipe(recipe: Recipe) {
    console.log(recipe);
    const response = await fetch(this.gateway, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });

    const status = response.status;
    if (status === 201 || status === 422) {
      const data = await response.json();

      if (status === 422) {
        const errors = {};
        // transform error format
        if (Array.isArray(data.detail)) {
          data.detail.forEach((item) => {
            if (item && Array.isArray(item.loc) && item.msg) {
              errors[item.loc.at(-1)] = item.msg;
            }
          });
        }
        throw new BadRequestException({ errors });
      }

      return data.message;
    } else {
      throw new ServiceUnavailableException('Post recipe gateway unavailable');
    }
  }
}
