import styles from "./counter.module.css";
import { Button } from "../Button/Button";
export const Counter = ({ decrease, increase, value }) => {
  return (
    <div className={styles.counter}>
      <Button text={" - "} onClick={decrease} extraClass={styles.button} />
      <span className={styles.span}>{value}</span>
      <Button text={" + "} onClick={increase} extraClass={styles.button} />
    </div>
  );
};
