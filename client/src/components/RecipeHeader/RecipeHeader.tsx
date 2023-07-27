import Flag from "react-world-flags";
import styles from "./RecipeHeader.module.css";

import iconTwitter from '../../assets/brand-twitter.svg';
import iconTelegram from '../../assets/brand-telegram.svg';
import iconMedium from '../../assets/brand-medium.svg';
import { Link } from "react-router-dom";
import { Recipe } from "../../lib/recipe.interface";
import { recipeDifficultyLabel } from "../../lib/utils/recipeDifficultyLabel";

interface Props {
  recipe?: Recipe;
}

const openSharePopup = (url: string) => {
  window.open(
    url,
    '_blank',
    'width=600,height=400,popup,center,left=300,top=200'
  );
}

export const RecipeHeader: React.FC<Props> = ({ recipe }) => {

  const makeShareText = () => {
    if (!recipe) return '';

    return [
      recipe.name,
      recipe.description,
      'difficulty: ' + recipeDifficultyLabel(recipe.difficulty),
      recipe.protein && 'protein: ' + recipe.protein,
      recipe.produce && 'produce: ' + recipe.produce,
      recipe.spice && 'spices: ' + recipe.spice
    ].filter(row => row).join('\n');
  };

  const shareTo = (gateway: string) => {
    openSharePopup(
      gateway 
        + encodeURIComponent(makeShareText())
    );
  }

  const handleTwitterButton = () => {
    shareTo('https://twitter.com/intent/tweet?text=');
  }
  const handleTelegramButton = () => {
    shareTo('https://t.me/share/url?url=');
  }
  const handleMediumButton = () => {
    window.open(
      'https://medium.com/new-story',
      '_blank'
    );
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

