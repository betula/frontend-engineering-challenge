import { RecipeSearch } from "./RecipeSearch/RecipeSearch";
import { Layout } from "./Layout/Layout";
import { CurrentRecipe } from "./CurrentRecipe/CurrentRecipe";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <RecipeSearch />
      <CurrentRecipe />
    </Layout>
  );
};
