import Flag from "react-world-flags";
import styles from "./RecipeHeader.module.css";

import iconTwitter from '../../assets/brand-twitter.svg';
import iconTelegram from '../../assets/brand-telegram.svg';
import iconMedium from '../../assets/brand-medium.svg';
import { Link } from "react-router-dom";
import { Recipe } from "../../lib/recipe.interface";

interface Props {
  recipe?: Recipe;
}

export const RecipeHeader: React.FC<Props> = ({ recipe }) => {

  const handleTwitterButton = () => {
    console.log('twitter click');
  }
  const handleTelegramButton = () => {
    console.log('telegram click');
  }
  const handleMediumButton = () => {
    console.log('medium click');
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {recipe ? (
          <>
            <Flag className={styles.countryFlag} code={recipe.origin} />
            <div className={styles.title}>{recipe.name}</div>
          </>
        ) : null}
      </div>

      <div className={styles.buttonGroup}>
        {recipe ? (
          <>
            <button className={styles.brandButton} onClick={handleTwitterButton}>
              <img className={styles.brandIcon} alt="twitter" src={iconTwitter} />
            </button>
            <button className={styles.brandButton} onClick={handleTelegramButton}>
              <img className={styles.brandIcon} alt="telegram" src={iconTelegram} />
            </button>
            <button className={styles.brandButton} onClick={handleMediumButton}>
              <img className={styles.brandIcon} alt="medium" src={iconMedium} />
            </button>
          </>
        ) : null}

        <Link to="create-recipe" className={styles.addRecipeButton} role="button">
          + Add recipe
        </Link>
      </div>
    </div>
  );
};

