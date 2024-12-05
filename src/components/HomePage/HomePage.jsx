import { Link } from "react-router-dom";
import { ColoredText } from "../ColoredText/ColoredText";
import styles from "./homePage.module.css";
export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <h2 className={styles.title}>Добро пожаловать!</h2>
      <Link to="/restaurants" className={styles.link}>
        <ColoredText text="Выбрать ресторан" extraClass={styles.linkText} />
      </Link>
    </main>
  );
};
