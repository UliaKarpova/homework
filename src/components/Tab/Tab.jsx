import { Button } from "../Button/Button";
import styles from "./tab.module.css";

export const Tab = ({ text }) => {
  return <Button text={text} extraClass={styles.tab} />;
};
