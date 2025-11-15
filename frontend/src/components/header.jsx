import { Link } from "react-router"
import '../css/styles.css'
import { useEffect, useState } from "react";
import checkSession from '../utils/checkSession.js';
import { useNavigate } from 'react-router';

export default function Header() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		checkSession(setLoggedIn);
	}, [])

	async function handleLogout() {
		await fetch("http://localhost:8000/users.php", {
			credentials: "include",
			method: "POST",
			body: JSON.stringify({ action: "logout" })
		})
		location.reload();
	}

	function LoginButton() {
		const navigate = useNavigate();
		
		if (loggedIn == false) {
			return <button className="login-button" onClick={() => navigate("/login")}>Login</button>
		} else {
			console.log(loggedIn)
			return <button className="login-button" onClick={handleLogout}>Logout</button>
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
			<nav>
			<LoginButton />
			<Link to="/cart">
				<img className="cart-button" src="src/assets/images/cart-icon.png" alt="Cart Image" />
			</Link>
			</nav>
		</header>
	);
}
