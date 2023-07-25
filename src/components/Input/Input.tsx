import { useState } from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import errorIcon from "../../assets/general-alert1.svg";

interface Props {
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  prefix,
  postfix,
  placeholder,
  error,
  value,
  onChange
}) => {
  const [focused, setFocused] = useState(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  }
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={styles.container}>
      <div className={cn(styles.inputContainer, {
        [styles.focused]: focused
      })}>
        {prefix || null}

        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={styles.input}
          placeholder={placeholder}
        />

        {postfix || null}
      </div>

      {error ? (
        <div className={styles.errorContainer}>
          <img className={styles.errorIcon} src={errorIcon} />
          <div className={styles.errorText}>{error}</div>
        </div>
      ) : null}
    </div>
  );
};
