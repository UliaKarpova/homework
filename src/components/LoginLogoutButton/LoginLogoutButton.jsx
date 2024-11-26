import { useContext } from "react";
import { Button } from "../Button/Button";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./loginLogoutButton.module.css";

export const LoginLogoutButton = () => {
  const { name, setName, isAuth } = useContext(AuthContext);
  const text = !isAuth ? "Войти" : `${name} Выйти`;

  const loginLogout = () => {
    if (name === undefined) {
      setName("Фёдор");
    } else {
      setName(undefined);
    }
  };

  return (
    <Button
      onClick={loginLogout}
      text={text}
      extraClass={styles.loginLogoutButton}
    />
  );
};
