import { useSelector, useDispatch } from "react-redux";
import { Counter } from "../Counter/Counter";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart-slice";

export const DishCounter = ({ id }) => {
  const dispatch = useDispatch();
  const value =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const increase = () => dispatch(addToCart(id));

  const decrease = () => dispatch(removeFromCart(id));

  return <Counter increase={increase} decrease={decrease} value={value} />;
};
