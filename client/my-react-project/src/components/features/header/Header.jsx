import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
    
    return(
        <nav className={styles.navbar}>
        <div className={styles.container}>
            <ul className={styles.leftLinks}>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to="/my-games">My Games</Link>
                </li>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to="/all-games">All Games</Link>
                </li>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to="/create-game">Create New Offer</Link>
                </li>
            </ul>

            <ul className={styles.rightLinks}>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to="/profile">User's Profile</Link>
                </li>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to="/login">Login</Link>
                </li>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to="/register">Register</Link>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="#">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}