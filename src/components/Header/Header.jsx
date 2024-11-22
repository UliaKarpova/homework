import { ProgressScrollBar } from "../ProgressScrollBar/ProgressScrollBar";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Список <br />
          ресторанов
        </h1>
        <ProgressScrollBar />
      </header>
    </>
  );
};
