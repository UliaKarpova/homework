import { Tab } from "../Tab/Tab";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <section className={styles.section}>
      <ul className={styles.container}>
        {menu.map(({ id, name }) => {
          return (
            <li key={id} className={styles.menuItem}>
              <Link to={`/dish/${id}`}>
                <Tab text={name} />
              </Link>
            </li>)
        })
        }
      </ul>
    </section>
  );
};
