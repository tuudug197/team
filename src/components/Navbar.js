import styles from '../assets/navbar.module.css'
import { Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link to="">Products</Link>
            <Link to="/blogs">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}