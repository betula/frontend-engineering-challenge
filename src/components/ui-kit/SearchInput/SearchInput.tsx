import { useState } from "react";
import styles from "./SearchInput.module.css";
import { Input } from "../Input/Input";
import searchIcon from "../../../assets/general-search.svg";
import clearIcon from "../../../assets/general-delete.svg";


export const SearchInput: React.FC = () => {
  const [text, setText] = useState('');

  const handleClear = () => {
    setText('');
  }

  return (
    <Input
      inputClassName={styles.searchInput}
      focusedClassName={styles.searchInputFocused}
      value={text}
      onChange={setText}
      placeholder="Search cuisine"
      prefix={
        <div className={styles.searchIconContainer}>
          <img className={styles.searchIcon} src={searchIcon} />
        </div>
      }
      postfix={
        <>
          {text ? (
              <div
                className={styles.clearIconContainer}
                role="button"
                onClick={handleClear}
              >
                <img className={styles.clearIcon} src={clearIcon} />
              </div>
            ) : null}
        </>
      }
    />
  );
};
