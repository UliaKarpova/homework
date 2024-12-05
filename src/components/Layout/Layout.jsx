import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Cart } from "../Cart/Cart";

export const Layout = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Header />
      {children}
      {isAuth && <Cart />}
      <Footer />
    </>
  );
};
