import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { RestaurantTabContainer } from "./RestaurantTabContainer";
import { ColoredText } from "../ColoredText/ColoredText";
import styles from "./restaurantItem.module.css";

export const RestaurantItem = () => {
  const { restaurantId } = useParams();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <main className={styles.main}>
      <ColoredText text={name} extraClass={styles.title} />
      <RestaurantTabContainer restaurantId={restaurantId} />
    </main>
  );
};
