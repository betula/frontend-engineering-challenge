import { FC } from "react";
import Flag from "react-world-flags";
import styles from "./RecipeHeader.module.css";

import iconTwitter from '../../assets/brand-twitter.svg';
import iconTelegram from '../../assets/brand-telegram.svg';
import iconMedium from '../../assets/brand-medium.svg';

export const RecipeHeader: FC = () => {
  const countryCode = 'es';
  const title = 'Spanish Paella';

  const handleTwitterButton = () => {}
  const handleTelegramButton = () => {}
  const handleMediumButton = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Flag className={styles.countryFlag} code={countryCode} />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.brandButton} role="button" onClick={handleTwitterButton}>
          <img className={styles.brandIcon} alt="twitter" src={iconTwitter} />
        </div>
        <div className={styles.brandButton} role="button" onClick={handleTelegramButton}>
          <img className={styles.brandIcon} alt="telegram" src={iconTelegram} />
        </div>
        <div className={styles.brandButton} role="button" onClick={handleMediumButton}>
          <img className={styles.brandIcon} alt="medium" src={iconMedium} />
        </div>
        <div className={styles.addRecipeButton} role="button">
          + Add recipe
        </div>
      </div>
    </div>
  );
};

