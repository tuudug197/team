import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Products</Link>
            <Link to="/blogs">Services</Link>
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}