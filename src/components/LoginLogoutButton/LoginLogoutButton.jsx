import { useContext } from "react";
import { Button } from "../Button/Button";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./loginLogoutButton.module.css";

export const LoginLogoutButton = () => {
  const { user, setUser, isAuth } = useContext(AuthContext);
  const text = !isAuth ? "Войти" : `${user.name} Выйти`;

  const loginLogout = () => {
    if (user === undefined) {
      setUser({ name: "Antony", id: 'a304959a-76c0-4b34-954a-b38dbf310360' });
    } else {
      setUser(undefined);
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
