
interface RecipePublishRequest {
  name: string,
  description: string,
  protein: string,
  produce: string,
  spice: string,
  cookingOil: string,
  volume: string,
  serves: string,
  stock: string,

  origin: string,
  difficulty: string,
  authenticity: string
}

class RecipeApi {

  async publish(request: RecipePublishRequest) {

    console.log(request);

    await new Promise(r => setTimeout(r, 1500));
  }

}

export const recipeApi = new RecipeApi();