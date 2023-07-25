import styles from "./RecipeCard.module.css";

export const RecipeCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <div className={styles.label}>Protein</div>
          <div className={styles.regularText}>Jumbo Shrimp</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.label}>Produce</div>
          <div className={styles.produceText}>Tomatoes</div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <div className={styles.label}>Spices</div>
          <div className={styles.highlightText}>Safron</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.label}>Cooking Oil</div>
          <div className={styles.highlightText}>Spanish Olive Oil</div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <div className={styles.label}>Volume/Weight</div>
          <div className={styles.regularText}>700g</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.label}>Serves</div>
          <div className={styles.regularText}>4</div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <div className={styles.label}>Authenticity</div>
          <div className={styles.highlightText}>Unverified</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.label}>Stock</div>
          <div className={styles.highlightText}>Chicken</div>
        </div>
      </div>
    </div>
  );
};
