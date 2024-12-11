import { MenuItemTabContainer } from "../MenuItem/MenuItemTabContainer";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <section className={styles.section}>
      <ul className={styles.container}>
        {menu.map((dishId) => {
          return (
            <li key={dishId} className={styles.menuItem}>
              <MenuItemTabContainer dishId={dishId} />
            </li>)
        })
        }
      </ul>
    </section>
  );
};
