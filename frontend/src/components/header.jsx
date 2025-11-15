import { Link } from "react-router"
import '../css/styles.css'
import { useEffect, useState } from "react";
import checkSession from '../utils/checkSession.js';

export default function Header() {
	const [loggedIn, setLoggedIn] = useState();

	checkSession(setLoggedIn);

	async function handleLogout() {
		await fetch("http://localhost:8000/users.php", {
			credentials: "include",
			method: "POST",
			body: JSON.stringify({ action: "logout" })
		})
		location.reload();
	}

	function LoginButton() {
		if (loggedIn == false) {
			return <Link to="/login" >
				<img className="login-button" src="src/assets/images/login-button.png" />
			</Link>
		} else {
			return <button onClick={handleLogout}>Logout</button>
		}
	}

	return (
		<header>
			<Link to="/"><img className="logo" src="src/assets/images/logo.png" alt="Logo Image" /></Link>
			<nav>
				<Link to="/">Lifr & News</Link>
				<Link to="/about-us">About Us</Link>
				<Link to="/store">Store</Link>
			</nav>
			<LoginButton />
			<Link to="/cart">
				<img className="cart-button" src="src/assets/images/cart-icon.png" alt="Cart Image" />
			</Link>
		</header>
	);
}
