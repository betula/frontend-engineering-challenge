import { SearchInput } from "./form/SearchInput/SearchInput";
import { RecipeHeader } from "./RecipeHeader/RecipeHeader";
import { RecipeInfo } from "./RecipeInfo/RecipeInfo";
import { RecipeCard } from "./RecipeCard/RecipeCard";
import { Layout } from "./Layout/Layout";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <SearchInput />
      <RecipeHeader />
      <RecipeInfo />
      <RecipeCard />
    </Layout>
  );
};
