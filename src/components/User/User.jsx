import styles from './user.module.css'

export const User = ({ name }) => {
    return (
        <span className={styles.author}>{name}</span>
    )
}