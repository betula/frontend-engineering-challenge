import { FunctionComponent } from "react";
import styles from "./Yum2.module.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { RecipeHeader } from "./RecipeHeader/RecipeHeader";

const Yum2: FunctionComponent = () => {
  return (
    <div className={styles.yum2}>
      <SearchInput />
      <RecipeHeader />
      
      <div className={styles.toastWrapper}>
        <div className={styles.toast}>
          <div className={styles.frameContainer}>
            <div className={styles.generalSearchParent}>
              <img className={styles.paella1Icon} alt="" src="/paella-1.svg" />
              <b className={styles.difficultyMedium}>
                <span className={styles.difficulty}>{`Difficulty: `}</span>
                <span className={styles.medium}>Medium</span>
              </b>
            </div>
            <img
              className={styles.generalDelete1}
              alt=""
              src="/20--general--delete.svg"
            />
          </div>
          <div className={styles.spanishPaellaIs}>
            Spanish paella is a traditional rice dish that originated in the
            Valencia region of Spain. It was originally made with ingredients
            such as saffron, rabbit, and snails, which were common in the area.
          </div>
        </div>
      </div>
      <div className={styles.basicCard}>
        <div className={styles.frameDiv}>
          <div className={styles.hiNeoParent}>
            <div className={styles.somethingWentWrong}>{`Hi, Neo `}</div>
            <b className={styles.welcome}>Welcome</b>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.button8}>
              <img
                className={styles.generalSearch}
                alt=""
                src="/20--general--add.svg"
              />
              <div className={styles.button1}>Button</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Protein</div>
            <div className={styles.jumboShrimp}>Jumbo Shrimp</div>
          </div>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Spice Level</div>
            <div className={styles.hot}>Hot</div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Spices</div>
            <div className={styles.saffron}>Saffron</div>
          </div>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Cooking Oil</div>
            <div className={styles.saffron}>Spanish Olive Oil</div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Volume/Weight</div>
            <div className={styles.jumboShrimp}>700g</div>
          </div>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Serves</div>
            <div className={styles.jumboShrimp}>4</div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Authenticity</div>
            <div className={styles.saffron}>Unverified</div>
          </div>
          <div className={styles.proteinParent}>
            <div className={styles.somethingWentWrong}>Stock</div>
            <div className={styles.saffron}>Chicken</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yum2;
