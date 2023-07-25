import styles from "./Input.module.css";
import { Control } from "../Control/Control";

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
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  }

  return (
    <Control error={error}>
      {(handleFocus, handleBlur) => (
        <div className={styles.inputContainer}>
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
      )}
    </Control>
  );
};
