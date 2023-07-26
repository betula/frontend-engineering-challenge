interface RecipePublishRequest {
  name: string,
  description: string,
  protein: string,
  produce: string,
  spice: string,
  cookingOil: string,
  volume: number,
  serves: number,
  stock: string,

  origin: string,
  difficulty: number,
  authenticity: string
}

interface RecipePublishResponse {
  message: string;
}


class RecipeApi {

  readonly GATEWAY = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes';

  async publish(request: RecipePublishRequest): Promise<RecipePublishResponse> {
    const response = await fetch(this.GATEWAY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    const data = await response.json();

    return {
      message: data?.message || 'Server answered without message'
    };
  }

}

export const recipeApi = new RecipeApi();