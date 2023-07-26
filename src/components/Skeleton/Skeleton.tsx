import { useState } from "react";
import styles from "./Skeleton.module.css";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";

export const Skeleton: React.FC = () => {
  const [name, setName] = useState('');
  const [desription, setDescription] = useState('');
  const [protein, setProtein] = useState('');
  const [produce, setProduce] = useState('');
  const [spice, setSpice] = useState('');
  const [cookingOil, setCookingOil] = useState('');
  const [volume, setVolume] = useState('');
  const [serves, setServes] = useState('');
  const [stock, setStock] = useState('');

  return (
    <div className={styles.yumazzo}>
      <Header title="Add new recipe" />

      <div className={styles.textInputParent}>
        
        <Input
          label="Name"
          value={name}
          onChange={setName}
          />

        <div className={styles.textInput}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Origin</div>
            <div className={styles.required}>*</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.filledhardwarekeyboardArrowParent}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--calendar1.svg"
              />
              <div className={styles.text}>Text</div>
              <div className={styles.placeholder}>Country origin</div>
            </div>
            <div className={styles.generalDeleteWrapper}>
              <img
                className={styles.arrowChevronDown}
                alt=""
                src="/20--arrow--chevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.errorStateText}>
            <img
              className={styles.generalAlert}
              alt=""
              src="/32--general--alert.svg"
            />
            <div className={styles.somethingWentWrong}>
              Something went wrong
            </div>
          </div>
          <div className={styles.helperText}>
            <div className={styles.somethingWentWrong}>
              Tristique senectus et netus et
            </div>
          </div>
        </div>
      </div>

      <Textarea 
        value={desription}
        onChange={setDescription}
        label="Description"
        placeholder="Describe your recipe..."
        limit={200}
      />

      <div className={styles.textInputParent}>
        <div className={styles.textInput}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Difficulty</div>
            <div className={styles.required}>*</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.filledhardwarekeyboardArrowParent}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--calendar1.svg"
              />
              <div className={styles.text}>Text</div>
              <div className={styles.placeholder}>Easy</div>
            </div>
            <div className={styles.generalDeleteWrapper}>
              <img
                className={styles.arrowChevronDown}
                alt=""
                src="/20--arrow--chevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.errorStateText}>
            <img
              className={styles.generalAlert}
              alt=""
              src="/32--general--alert.svg"
            />
            <div className={styles.somethingWentWrong}>
              Something went wrong
            </div>
          </div>
          <div className={styles.helperText}>
            <div className={styles.somethingWentWrong}>
              Tristique senectus et netus et
            </div>
          </div>
        </div>

        <Input
          label="Protein"
          value={protein}
          onChange={setProtein}
          placeholder="Fish, Meat, Plant?"
          />
      </div>
      <div className={styles.textInputParent}>
        <Input
          label="Prodice"
          value={produce}
          onChange={setProduce}
          placeholder="Which products?"
          />
        <Input
          label="Spices"
          value={spice}
          onChange={setSpice}
          />
      </div>
      <div className={styles.textInputParent}>
        <Input
          label="Cooking Oil?"
          value={cookingOil}
          onChange={setCookingOil}
          />

        <Input
          label="Volume"
          value={volume}
          onChange={setVolume}
          postfix="gramms"
          />
      </div>
      <div className={styles.textInputParent}>
        <Input
          label="Serves"
          value={serves}
          onChange={setServes}
          postfix="people"
          />

        <div className={styles.textInput}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Authenticity</div>
            <div className={styles.required}>*</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.filledhardwarekeyboardArrowParent}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--calendar1.svg"
              />
              <div className={styles.text}>Text</div>
              <div className={styles.placeholder}>Unverified</div>
            </div>
            <div className={styles.generalDeleteWrapper}>
              <img
                className={styles.arrowChevronDown}
                alt=""
                src="/20--arrow--chevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.errorStateText}>
            <img
              className={styles.generalAlert}
              alt=""
              src="/32--general--alert.svg"
            />
            <div className={styles.somethingWentWrong}>
              Something went wrong
            </div>
          </div>
          <div className={styles.helperText}>
            <div className={styles.somethingWentWrong}>
              Tristique senectus et netus et
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textInputWrapper}>

        <Input
          label="Stock"
          value={stock}
          onChange={setStock}
          />

      </div>
      <div className={styles.button}>
        <img
          className={styles.generalPencil}
          alt=""
          src="/32--general--pencil.svg"
        />
        <div className={styles.label}>Add Recipe</div>
      </div>
    </div>
  );
};

