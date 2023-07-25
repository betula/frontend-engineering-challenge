import { useState } from "react";
import styles from "./Skeleton.module.css";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";

export const Skeleton: React.FC = () => {
  const [name, setName] = useState('');
  const [protein, setProtein] = useState('');
  const [produce, setProduce] = useState('');
  const [spice, setSpice] = useState('');

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
      <div className={styles.textArea}>
        <div className={styles.labelParent}>
          <div className={styles.label}>Description</div>
          <div className={styles.required}>*</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper}>
            <div className={styles.textParent}>
              <div className={styles.text2}>Text</div>
              <div className={styles.placeholder}>Describe your recipe...</div>
            </div>
          </div>
          <img className={styles.frameItem} alt="" src="/frame-54.svg" />
        </div>
        <div className={styles.errorStateText}>
          <img
            className={styles.generalAlert}
            alt=""
            src="/32--general--alert.svg"
          />
          <div className={styles.somethingWentWrong}>Something went wrong</div>
        </div>
        <div className={styles.helperText2}>
          <div className={styles.somethingWentWrong}>0/200 Characters</div>
        </div>
      </div>
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
          />
      </div>
      <div className={styles.textInputParent}>
        <Input
          label="Prodice"
          value={produce}
          onChange={setProduce}
          />
        <Input
          label="Spice"
          value={spice}
          onChange={setSpice}
          />
      </div>
      <div className={styles.textInputParent}>
        <div className={styles.textInput}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Cooking Oil?</div>
            <div className={styles.required}>*</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.generalCalendarParent}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--calendar.svg"
              />
              <div className={styles.text}>Text</div>
              <div className={styles.placeholder}>Which oil to use?</div>
            </div>
            <div className={styles.generalDeleteWrapper}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--delete.svg"
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
        <div className={styles.textInput}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Volume</div>
            <div className={styles.required}>*</div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.generalCalendarParent5}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--calendar1.svg"
              />
              <div className={styles.text}>Text</div>
              <div className={styles.placeholder7}>grams</div>
            </div>
            <div className={styles.generalDeleteWrapper3}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--delete.svg"
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
      <div className={styles.textInputParent}>
        <div className={styles.textInput}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Serves</div>
            <div className={styles.required}>*</div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.generalCalendarParent5}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--calendar1.svg"
              />
              <div className={styles.text}>Text</div>
              <div className={styles.placeholder7}>people</div>
            </div>
            <div className={styles.generalDeleteWrapper3}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--delete.svg"
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
        <div className={styles.textInput}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Stock</div>
            <div className={styles.required}>*</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.generalCalendarParent}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--calendar.svg"
              />
              <div className={styles.text}>Text</div>
              <div className={styles.placeholder}>Fish, Meat, Plant Based?</div>
            </div>
            <div className={styles.generalDeleteWrapper}>
              <img
                className={styles.generalCalendar}
                alt=""
                src="/32--general--delete.svg"
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

