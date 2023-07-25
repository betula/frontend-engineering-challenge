import styles from "./Header.module.css";
import backIcon from "../../assets/arrow-left.svg";

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {

  const handleBack = () => history.back();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <button onClick={handleBack} className={styles.backButton}>
          <img className={styles.backIcon} src={backIcon} />
        </button>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.bottom} />
    </div>
  );
};

