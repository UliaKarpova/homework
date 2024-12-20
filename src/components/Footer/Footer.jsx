import ColoredText from "../ColoredText/ColoredText";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ColoredText text={"тут должен быть копирайт"} />
    </footer>
  );
};
