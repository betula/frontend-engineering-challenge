import styles from "./SearchInput.module.css";
import { Input } from "../Input/Input";
import searchIcon from "../../../assets/general-search.svg";
import clearIcon from "../../../assets/general-delete.svg";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<Props> = ({
  value,
  onChange
}) => {
  const handleClear = () => {
    onChange('');
  }

  return (
    <Input
      inputClassName={styles.searchInput}
      focusedClassName={styles.searchInputFocused}
      value={value}
      onChange={onChange}
      placeholder="Search cuisine"
      prefix={
        <div className={styles.searchIconContainer}>
          <img className={styles.searchIcon} src={searchIcon} />
        </div>
      }
      postfix={
        <>
          {value ? (
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
