import { FunctionComponent } from "react";
import styles from "./Yum2.module.css";
import { SearchInput } from "./SearchInput/SearchInput";

const Yum2: FunctionComponent = () => {
  return (
    <div className={styles.yum2}>
      <SearchInput />
      {/* <div className={styles.textInput}>
        <div className={styles.labelParent}>
          <div className={styles.label}>Label</div>
          <div className={styles.required}>*</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.generalSearchParent}>
            <img
              className={styles.generalSearch}
              alt=""
              src="/20--general--search.svg"
            />
            <div className={styles.text}>Text</div>
            <div className={styles.placeholder}>Search cuisine</div>
          </div>
          <div className={styles.generalDeleteWrapper}>
            <img
              className={styles.generalDelete}
              alt=""
              src="/32--general--delete1.svg"
            />
          </div>
        </div>
        <div className={styles.errorStateText}>
          <img
            className={styles.generalAlert}
            alt=""
            src="/32--general--alert1.svg"
          />
          <div className={styles.somethingWentWrong}>Something went wrong</div>
        </div>
        <div className={styles.helperText}>
          <div className={styles.somethingWentWrong}>
            Tristique senectus et netus et
          </div>
        </div>
      </div> */}
      <div className={styles.frameGroup}>
        <div className={styles.generalSearchParent}>
          <img className={styles.spain1Icon} alt="" src="/spain-1@2x.png" />
          <div className={styles.label}>Spanish Paella</div>
        </div>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <img
              className={styles.brandTwitter}
              alt=""
              src="/20--brand--twitter.svg"
            />
            <div className={styles.button1}>Button</div>
          </div>
          <div className={styles.button}>
            <img
              className={styles.brandTwitter}
              alt=""
              src="/32--brand--telegram.svg"
            />
            <div className={styles.button1}>Button</div>
          </div>
          <div className={styles.button}>
            <img
              className={styles.brandTwitter}
              alt=""
              src="/32--brand--medium.svg"
            />
            <div className={styles.button1}>Button</div>
          </div>
          <div className={styles.button6}>
            <div className={styles.button1}>Button</div>
            <div className={styles.addRecipe}>+ Add recipe</div>
          </div>
        </div>
      </div>
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
