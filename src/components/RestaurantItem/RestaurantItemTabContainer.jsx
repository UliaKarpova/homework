import Link from "next/link";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import styles from "./restaurantItem.module.css";

export const RestarauntItemTabContainer = ({ restaurantId }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.linkContainer}>
      <Link
        href={`/restaurants/${restaurantId}/menu`}
        className={classNames(styles.link, {
          [styles.orange]: theme === "orange",
          [styles.blueviolet]: theme === "blueviolet",
        })
        }
      >
        МЕНЮ
      </Link>
      <Link
        href={`/restaurants/${restaurantId}/reviews`}
        className={classNames(styles.link, {
          [styles.orange]: theme === "orange",
          [styles.blueviolet]: theme === "blueviolet",
        })
        }
      >
        ОТЗЫВЫ
      </Link>
    </div>
  );
};
