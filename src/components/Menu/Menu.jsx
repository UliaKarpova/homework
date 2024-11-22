import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./menu.module.css";
export const Menu = ({ menu }) => {
  return (
    <section>
      <h3 className={styles.menuTitle}>МЕНЮ</h3>
      <ul className={styles.menuList}>
        {menu.map((menuItem, index) => {
          return (
            <li key={index} className={styles.menuItem}>
              <MenuItem menuItem={menuItem} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
