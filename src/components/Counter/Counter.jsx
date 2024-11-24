import styles from "./counter.module.css";

export const Counter = ({ decrease, increase, value }) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={decrease}>
        -
      </button>
      <span className={styles.span}>{value}</span>
      <button className={styles.button} onClick={increase}>
        +
      </button>
    </div>
  );
};
