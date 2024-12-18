import ColoredText from "../ColoredText/ColoredText";
import { RestarauntItemTabContainer } from "./RestaurantItemTabContainer";
import styles from "./restaurantItem.module.css";

export const RestaurantItem = ({ name, restaurantId, children }) => {

    return (
        <main className={styles.main}>
            <ColoredText text={name} extraClass={styles.title} />
            <RestarauntItemTabContainer restaurantId={restaurantId} />
            {children}
        </main>
    );
};
