import { observer } from "mobx-react-lite";
import styles from "./CurrentRecipe.module.css";
import { currentRecipeService } from "../../lib/currentRecipe.service";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { RecipeHeader } from "../RecipeHeader/RecipeHeader";
import { RecipeInfo } from "../RecipeInfo/RecipeInfo";

export const CurrentRecipe: React.FC = observer(() => {
  const recipe = currentRecipeService.recipe;

  return (
    <div className={styles.container}>
      <RecipeHeader recipe={recipe} />
      <RecipeInfo recipe={recipe} />
      <RecipeCard recipe={recipe} />
    </div>
  );
});
