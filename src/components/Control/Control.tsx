import { useState } from "react";
import cn from "classnames";
import styles from "./Control.module.css";
import errorIcon from "../../assets/general-alert.svg";

interface Props {
  bottom?: React.ReactNode;
  error?: string;
  label?: string;
  required?: boolean;
  inputClassName?: string;
  focusedClassName?: string;
  children: (handleFocus: () => void, handleBlur: () => void) => React.ReactNode;
}

export const Control: React.FC<Props> = ({
  bottom,
  error,
  label,
  required,
  inputClassName,
  focusedClassName,
  children
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const controlContainerClassName = cn(
    inputClassName, 
    styles.controlContainer,
    focused && [styles.controlContainerFocused, focusedClassName]
  );

  return (
    <div className={styles.container}>
      {label ? (
        <div className={styles.labelContainer}>
          <div className={styles.label}>{label}</div>
          {required ? (
            <div className={styles.required}>*</div>
          ) : null}
        </div>
      ) : null}
      <div className={controlContainerClassName}>
        {children(handleFocus, handleBlur)}
      </div>

      {bottom || null}

      {error ? (
        <div className={styles.errorContainer}>
          <img className={styles.errorIcon} src={errorIcon} />
          <div className={styles.errorText}>{error}</div>
        </div>
      ) : null}
    </div>
  );
};
