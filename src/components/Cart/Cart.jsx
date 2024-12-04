import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart-slice";
import { CartItem } from "../CartItem/CartItem";
import { ColoredText } from "../ColoredText/ColoredText";
import styles from "./cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.cart}>
      <ColoredText text="Корзина" extraClass={styles.title} />
      <ul>
        {items.map(({ id }) => (
          <li key={id}>{<CartItem id={id} />}</li>
        ))}
      </ul>
    </div>
  );
};
