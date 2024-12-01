import { MenuItem } from "../MenuItem/MenuItem";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <section className={styles.section}>
      <SectionTitle title={"Меню"} />
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
