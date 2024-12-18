import styles from "./dish.module.css";
import image from "../../images/delicious-top-view-black-shrimp-pasta-with-soy-sauce.jpg";
export const Dish = ({ name, ingredients, price, children }) => {
    return (
        <main className={styles.main}>
            <div className={styles.dishItem}>
                <h4 className={styles.dishTitle}>{name}</h4>
                <p>&#9658; {ingredients.join(", ")}</p>
                <p className={styles.price}>
                    Price:<b> {price}</b> &#8381;
                </p>
                {children}
            </div>
            <img className={styles.img} src={image.src} alt="Блюдо" />
        </main>
    )
}