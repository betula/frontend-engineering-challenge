import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RecipeService } from './recipe.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, RecipeService],
})
export class AppModule {}
