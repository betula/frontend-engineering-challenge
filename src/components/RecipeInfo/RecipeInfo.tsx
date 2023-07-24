import { FC } from "react";
import styles from "./RecipeInfo.module.css";

export const RecipeInfo: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.difficulty}>
          Difficulty: Medium
        </div>
        <div className={styles.text}>
          Spanish paella is a traditional rice dish that originated in the
          Valencia region of Spain. It was originally made with ingredients
          such as saffron, rabbit, and snails, which were common in the area.
        </div>
      </div>
    </div>
  );
};
