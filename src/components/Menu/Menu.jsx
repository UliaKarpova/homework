// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { useOutletContext } from "react-router-dom";

// import { SectionTitle } from "../SectionTitle/SectionTitle";
import { MenuItemTabContainer } from "../MenuItem/MenuItemTabContainer";
import styles from "./menu.module.css";

export const Menu = () => {
  const [data] = useOutletContext();

  console.log('menu', data)
  return (
    <section className={styles.section}>
      {/* <SectionTitle title={`Меню ${name}`} /> */}
      <ul className={styles.container}>
        {data.map((dishId) => {
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
