import { useContext } from "react";
import { Button } from "../Button/Button";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./loginLogoutButton.module.css";

export const LoginLogoutButton = () => {
  const { name, setName, isAuth, id, setId } = useContext(AuthContext);
  const text = !isAuth ? "Войти" : `${name} Выйти`;

  const loginLogout = () => {
    if (name === undefined && id === undefined) {
      setName("Antony");
      setId('a304959a-76c0-4b34-954a-b38dbf310360')
    } else {
      setName(undefined);
      setId(undefined)

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
