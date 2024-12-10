import { SectionTitle } from "../SectionTitle/SectionTitle";
import { MenuItemTabContainer } from "../MenuItem/MenuItemTabContainer";
import styles from "./menu.module.css";

export const Menu = ({ menu, name }) => {
  return (
    <section className={styles.section}>
      <SectionTitle title={`Меню ${name}`} />
      <ul className={styles.container}>
        {menu.map((dishId) => {
          console.log(dishId)
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
