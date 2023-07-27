import { RecipeSearch } from "./RecipeSearch/RecipeSearch";
import { Layout } from "./Layout/Layout";
import { CurrentRecipe } from "./CurrentRecipe/CurrentRecipe";
import { Welcome } from "./Welcome/Welcome";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <RecipeSearch />
      <CurrentRecipe />
      <Welcome />
    </Layout>
  );
};
