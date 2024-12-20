"use client"
import Link from "next/link";
import ColoredText from "../../components/ColoredText/ColoredText";
import styles from "./home.module.css";

export default function Home() {
    return (
        <main className={styles.homePage}>
            <h2 className={styles.title}>Добро пожаловать!</h2>
            <Link href="/restaurants" className={styles.link}>
                <ColoredText text="Выбрать ресторан" extraClass={styles.linkText} />
            </Link>
        </main>
    );
};
