import { Link } from "react-router"
import '../css/styles.css'
import { useEffect } from "react";

export default function Header() {
	useEffect(() => {
		fetch("http://localhost:8000/check-session.php", {
			credentials: "include"
		})
			.then(response => response.json())
			.then(data => {
				if (data.loggedIn) {
					console.log("user logged in: ", data.userId);
				} else {
					console.log("user is not logged in");
				}
			})
	});

	return (
		<header>
			<Link to="/"><img className="logo" src="src/assets/images/logo.png" alt="Logo Image" /></Link>
			<nav>
				<Link to="/">Lifr & News</Link>
				<Link to="/about-us">About Us</Link>
				<Link to="/store">Store</Link>
				<Link to="/recipes">Recipes</Link>
			</nav>
			<Link to="/login" >
				<img className="login-button" src="src/assets/images/login-button.png" />
			</Link>
			<Link to="/cart">
				<img className="cart-button" src="src/assets/images/cart-icon.png" alt="Cart Image" />
			</Link>
		</header>
	);
}
