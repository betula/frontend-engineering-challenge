import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeDto } from './recipe.dto';

@Controller()
export class AppController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get('/search')
  async getSearch(@Query('query') query?: string) {
    return {
      message: await this.recipeService.search(query || ''),
    };
  }

  @Post('/recipe')
  async postRecipe(@Body() recipeDto: RecipeDto) {
    return {
      message: await this.recipeService.publish(recipeDto),
    };
  }
}
