import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./menu.module.css";
export const Menu = ({ menu }) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.menuTitle}>МЕНЮ</h3>
      <ul className={styles.menuList}>
        {menu.map((dishId) => {
          return (
            <li key={dishId} className={styles.menuItem}>
              <MenuItem dishId={dishId} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
