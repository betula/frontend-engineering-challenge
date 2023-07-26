import styles from "./Select.module.css";
import { Control } from "../Control/Control";
import arrowIcon from "./assets/arrow-down.svg";

interface Options {
  [key: string]: string;
}

interface Props {
  placeholder?: string;
  label?: string;
  required?: boolean;
  error?: string;
  options: Options | string[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<Props> = ({
  placeholder,
  label,
  required,
  error,
  options,
  value,
  onChange
}) => {
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    onChange(event.currentTarget.value);
  }

  const isArray = Array.isArray(options);
  const resolve = (value: string) => (
    isArray ? value : options[value]
  )
  const keys = isArray ? options : Object.keys(options);
  const hasSelected = keys.indexOf(value) !== -1;

  console.log(hasSelected);

  return (
    <Control
      label={label}
      required={required}
      error={error}
    >
      {(handleFocus, handleBlur) => (
        <div className={styles.selectContainer}>

          <div className={styles.body}>
            {hasSelected ? (
              resolve(value)
            ) : (
              <div className={styles.placeholder}>
                {placeholder}
              </div>
            )}
          </div>

          <div className={styles.arrowIconContainer}>
            <img className={styles.arrowIcon} src={arrowIcon} />
          </div>

          <select
            className={styles.select}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {keys.map((key) => (
              <option value={key} key={key}>
                {resolve(key)}
              </option>
            ))}
          </select>

        </div>
      )}
    </Control>
  );
};
