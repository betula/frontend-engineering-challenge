import { observer } from "mobx-react-lite";
import Flag from "react-world-flags";
import { searchSuggestionsService } from "../../lib/searchSuggestions.service";
import styles from "./RecipeSearchSuggestions.module.css";
import { recipeDifficultyIcon } from "./utils/recipeDifficultyIcon";
import { recipeDifficultyLabel } from "../../lib/utils/recipeDifficultyLabel";

export const RecipeSearchSuggestions: React.FC = observer(() => {
  const suggestions = searchSuggestionsService.suggestions;
  if (!suggestions.length) {
    return null;
  }

  return (
    <div className={styles.container}>

      {suggestions.map((recipe, index) => (
        <button className={styles.row} key={index} onClick={() => searchSuggestionsService.pick(recipe)}>
          <div className={styles.titleContainer}>
            <Flag className={styles.countryFlag} code={recipe.origin} />
            <div className={styles.title}>{recipe.name}</div>
          </div>
          <div className={styles.difficultyContainer}>
            <img className={styles.difficultyIcon} src={recipeDifficultyIcon(recipe.difficulty)} />
            <div className={styles.difficultyTitle}>{recipeDifficultyLabel(recipe.difficulty)}</div>
          </div>
        </button>
      ))}

    </div>
  );
});
