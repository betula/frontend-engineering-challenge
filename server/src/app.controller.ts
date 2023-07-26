import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { RecipeService } from './recipe.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly recipeService: RecipeService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/search')
  async getSearch(@Query('query') query?: string) {
    return this.recipeService.search(query || '');
  }
}
