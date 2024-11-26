import { useContext } from "react";
import { Button } from "../Button/Button";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./toggleThemeButton.module.css";
export const ToggleThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => {
    if (theme === "orange") {
      setTheme("blueviolet");
    } else {
      setTheme("orange");
    }
  };

  return (
    <Button
      onClick={toggle}
      text={"Изменить цвет кнопок"}
      extraClass={styles.toggleButton}
    />
  );
};
