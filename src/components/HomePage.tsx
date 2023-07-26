import { RecipeSearch } from "./RecipeSearch/RecipeSearch";
import { RecipeHeader } from "./RecipeHeader/RecipeHeader";
import { RecipeInfo } from "./RecipeInfo/RecipeInfo";
import { RecipeCard } from "./RecipeCard/RecipeCard";
import { Layout } from "./Layout/Layout";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <RecipeSearch />
      <RecipeHeader />
      <RecipeInfo />
      <RecipeCard />
    </Layout>
  );
};
