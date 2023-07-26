import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { RecipeService } from './recipe.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [RecipeService],
})
export class AppModule {}
