import { Link } from "react-router-dom";
import { ColoredText } from "../../components/ColoredText/ColoredText";
import styles from "./home.module.css";

export const Home = () => {
    return (
        <main className={styles.homePage}>
            <h2 className={styles.title}>Добро пожаловать!</h2>
            <Link to="/restaurants" className={styles.link}>
                <ColoredText text="Выбрать ресторан" extraClass={styles.linkText} />
            </Link>
        </main>
    );
};
