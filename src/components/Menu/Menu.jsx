import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { MenuItemTabContainer } from "../MenuItem/MenuItemTabContainer";
import styles from "./menu.module.css";

export const Menu = () => {
  const { restaurantId } = useParams();
  const { name, menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <section className={styles.section}>
      <SectionTitle title={`Меню ${name}`} />
      <ul className={styles.container}>
        {menu.map((dishId) => {
          return (
            <li key={dishId} className={styles.menuItem}>
              <MenuItemTabContainer dishId={dishId} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
