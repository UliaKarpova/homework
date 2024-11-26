import { MenuItem } from "../MenuItem/MenuItem";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <section className={styles.section}>
      <SectionTitle title={"Меню"} />
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
