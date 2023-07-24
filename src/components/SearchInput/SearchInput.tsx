import { FC, useState } from "react";
import styles from "./SearchInput.module.css";

import searchIcon from "../../assets/general-search.svg";
import clearIcon from "../../assets/general-delete1.svg";
import errorIcon from "../../assets/general-alert1.svg";


export const SearchInput: FC = () => {
  const placeholderText = 'Search cuisine';
  const errorText = 'Something went wrong' && '';

  const [text, setText] = useState('');

  const hasText = text.length > 0;
  const hasError = errorText.length > 0;

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  }
  const handleClear = () => {
    setText('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchInputContainer}>

        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          className={styles.searchInput}
          placeholder={placeholderText}
        />

        <div className={styles.searchIconContainer}>
          <img className={styles.searchIcon} src={searchIcon} />
        </div>

        {hasText ? (
          <div
            className={styles.clearIconContainer}
            role="button"
            onClick={handleClear}
          >
            <img className={styles.clearIcon} src={clearIcon} />
          </div>
        ) : null}
      </div>
      {hasError ? (
        <div className={styles.errorContainer}>
          <img className={styles.errorIcon} src={errorIcon} />
          <div className={styles.errorText}>{errorText}</div>
        </div>
      ) : null}
    </div>
  );
};
