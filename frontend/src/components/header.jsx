import { Link } from "react-router"
import '../css/styles.css'

export default function Header() {
    return (
        <header>
            <Link to="/"><img className="logo" src="src/assets/images/logo.png" alt="Logo Image" /></Link>
            <nav>
                <Link to="/">Lifr & News</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/store">Store</Link>
                <Link to="/recipes">Recipes</Link>
            </nav>
            <Link to="/cart">
                <img className="cart-button" src="src/assets/images/cart-icon.png" alt="Cart Image" />
            </Link>
        </header>
    );
}