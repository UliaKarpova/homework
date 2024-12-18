import { Tab } from "../Tab/Tab";
import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu({ menu }) {
  return (
    <section className={styles.section}>
      <ul className={styles.container}>
        {menu.map(({ id, name }) => {
          return (
            <li key={id} className={styles.menuItem}>
              <Link href={`/dish/${id}`}>
                <Tab text={name} />
              </Link>
            </li>)
        })
        }
      </ul>
    </section>
  );
};
