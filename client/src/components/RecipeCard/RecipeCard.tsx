import { Recipe } from "../../lib/recipe.interface";
import styles from "./RecipeCard.module.css";

interface Props {
  recipe?: Recipe;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  if (!recipe) {
    return null;
  }

  return (
    <div className={styles.container}>

      {recipe.protein || recipe.produce ? (
        <div className={styles.row}>
          <div className={styles.cell}>
            <div className={styles.label}>Protein</div>
            <div className={styles.regularText}>{recipe.protein}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.label}>Produce</div>
            <div className={styles.produceText}>{recipe.produce}</div>
          </div>
        </div>
      ) : null}

      {recipe.spice || recipe.cookingOil ? (
        <div className={styles.row}>
          <div className={styles.cell}>
            <div className={styles.label}>Spices</div>
            <div className={styles.highlightText}>{recipe.spice}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.label}>Cooking Oil</div>
            <div className={styles.highlightText}>{recipe.cookingOil}</div>
          </div>
        </div>
      ) : null}

      {recipe.volume || recipe.serves ? (
        <div className={styles.row}>
          <div className={styles.cell}>
            <div className={styles.label}>Volume/Weight</div>
            <div className={styles.regularText}>
              {recipe.volume ? <>{recipe.volume}g</> : null}
            </div>
          </div>
          <div className={styles.cell}>
            <div className={styles.label}>Serves</div>
            <div className={styles.regularText}>{recipe.serves || null}</div>
          </div>
        </div>
      ) : null}

      {recipe.authenticity || recipe.stock ? (
        <div className={styles.row}>
          <div className={styles.cell}>
            <div className={styles.label}>Authenticity</div>
            <div className={styles.highlightText}>{recipe.authenticity}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.label}>Stock</div>
            <div className={styles.highlightText}>{recipe.stock}</div>
          </div>
        </div>
      ) : null}

    </div>
  );
};
