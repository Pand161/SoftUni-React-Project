import { Link } from "react-router-dom"
import styles from "./Header.module.css"

import { useContext } from 'react';
import AuthContext from "../../../contexts/authContext";
import Path from "../../../paths";

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);
    
    return(
        <nav className={styles.navbar}>
        <div className={styles.container}>
            <ul className={styles.leftLinks}>
                
                <li className={styles.navItem}>
                    <Link className={styles.navLink} to={Path.Home}>Home</Link>
                </li>
                {isAuthenticated && (
                <>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to={Path.Create}>Create New Offer</Link>
                </li>
                </>
                )}
                
                <li className={styles.navItem}>
                <Link className={styles.navLink} to={Path.AllGames}>All Games</Link>
                </li>
                
            </ul>

            <ul className={styles.rightLinks}>

            {isAuthenticated && (
                <>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to={Path.Profile}>{username}'s Profile</Link>
                </li>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to={Path.Logout}>Logout</Link>
                </li>
                </>
                )}

                {!isAuthenticated && (
                <>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to={Path.Login}>Login</Link>
                </li>
                <li className={styles.navItem}>
                <Link className={styles.navLink} to={Path.Register}>Register</Link>
                </li>
                </>
                )}
            </ul>
        </div>
    </nav>
    )
}