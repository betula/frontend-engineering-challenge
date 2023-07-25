import { useState } from "react";
import cn from "classnames";
import styles from "./Control.module.css";
import errorIcon from "../../assets/general-alert1.svg";

interface Props {
  bottom?: React.ReactNode;
  error?: string;
  children: (handleFocus: () => void, handleBlur: () => void) => React.ReactNode;
}

export const Control: React.FC<Props> = ({
  bottom,
  error,
  children
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={styles.container}>
      <div className={cn(styles.controlContainer, {
        [styles.focused]: focused
      })}>
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
