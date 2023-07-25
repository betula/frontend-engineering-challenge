import styles from "./Header.module.css";
import backIcon from "../../assets/arrow-left.svg";

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img className={styles.backIcon} src={backIcon} />

        <b className={styles.title}>{title}</b>
      </div>
      <div className={styles.bottom} />
    </div>
  );
};

