import { Link } from 'react-router-dom'
import styles from '../assets/navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <image src='../photos/logo.svg'/>
            <div className={styles.linkContainer}>
                <Link to="/" className={styles.link}>Products</Link>
                <Link to="/blogs" className={styles.link}>Services</Link>
                <Link to="/contacts" className={styles.link}>Contacts</Link>
                <Link className={styles.link}>Log in</Link>
                <button className={styles.getAccessButton}>Get access</button>
            </div>
        </div>
    )
}