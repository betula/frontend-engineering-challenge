import { Controller, Get, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller()
export class AppController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('/search')
  async getSearch(@Query('query') query?: string) {
    return this.recipeService.search(query || '');
  }
}
