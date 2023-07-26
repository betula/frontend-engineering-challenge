import cn from "classnames";
import { Recipe } from "../../lib/recipe.interface";
import { recipeDifficultyLabel } from "../../lib/utils/recipeDifficultyLabel";
import styles from "./RecipeInfo.module.css";

interface Props {
  recipe?: Recipe;
}

export const RecipeInfo: React.FC<Props> = ({ recipe }) => {
  if (!recipe) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={cn(styles.body, {
        [styles.bodyDifficultyEasy]: recipe.difficulty === 0,
        [styles.bodyDifficultyMedium]: recipe.difficulty === 1,
        [styles.bodyDifficultyHard]: recipe.difficulty === 2,
      })}>
        <div className={styles.difficulty}>
          Difficulty: {recipeDifficultyLabel(recipe.difficulty)}
        </div>
        <div className={styles.text}>
          {recipe.description}
        </div>
      </div>
    </div>
  );
};
