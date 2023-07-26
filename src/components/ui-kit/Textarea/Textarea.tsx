import styles from "./Textarea.module.css";
import { Control } from "../Control/Control";

interface Props {
  placeholder?: string;
  label?: string;
  required?: boolean;
  limit?: number;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Textarea: React.FC<Props> = ({
  placeholder,
  label,
  required,
  limit,
  error,
  value,
  onChange
}) => {
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget;

    const { paddingTop, paddingBottom } = getComputedStyle(target);
    target.style.height = '0';
    target.style.height = 
      (target.scrollHeight - parseFloat(paddingTop) - parseFloat(paddingBottom)) + 'px';

    onChange(target.value);
  }

  return (
    <Control
      label={label}
      required={required}
      error={error}
      bottom={
        limit ? (
          <div className={styles.limitContainer}>
            {value.length}/{limit} Characters
          </div>
        ) : null
      }
    >
      {(handleFocus, handleBlur) => (
        <div className={styles.textareaContainer}>

          <textarea
            maxLength={limit || undefined}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={styles.textarea}
            placeholder={placeholder}
          />

        </div>
      )}
    </Control>
  );
};
