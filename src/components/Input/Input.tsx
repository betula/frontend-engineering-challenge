import styles from "./Input.module.css";
import { Control } from "../Control/Control";

interface Props {
  inputClassName?: string;
  focusedClassName?: string;
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  inputClassName,
  focusedClassName,
  prefix,
  postfix,
  placeholder,
  label,
  required,
  error,
  value,
  onChange
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  }

  return (
    <Control
      inputClassName={inputClassName}
      focusedClassName={focusedClassName}
      label={label}
      required={required}
      error={error}
    >
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
