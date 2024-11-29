import { ProgressScrollBar } from "../ProgressScrollBar/ProgressScrollBar";
import styles from "./header.module.css";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";
import { LoginLogoutButton } from "../LoginLogoutButton/LoginLogoutButton";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Список <br />
          ресторанов
        </h1>
        <div className={styles.buttons}>
          <ToggleThemeButton />
          <LoginLogoutButton />
        </div>
        <ProgressScrollBar />
      </header>
    </>
  );
};
