import { observer } from "mobx-react-lite";
import styles from "./Welcome.module.css";
import { currentRecipeService } from "../../lib/currentRecipe.service";
import searchIcon from "../../assets/general-search.svg";

export const Welcome: React.FC = observer(() => {
  const recipe = currentRecipeService.recipe;
  if (recipe) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <img className={styles.searchIcon} src={searchIcon} />
        <div className={styles.text}>Please start your search</div>
      </div>
    </div>
  );
});
