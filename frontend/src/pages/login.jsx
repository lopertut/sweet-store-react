import { Link, useNavigate } from "react-router";
import '../css/styles.css';
import Header from "../components/header";

export default function Login() {
	const navigate = useNavigate();

	function handleLogin() {
		const username = document.getElementById("usernameField").value;
		const password = document.getElementById("passwordField").value;

		fetch("http://localhost:8000/users.php", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({ username: username, password: password, action: "login" })
		})
			.then((response) => response.json())
			.then(data => {
				if (data.success) {
					console.log("logged");
					navigate("/");
				} else {
					alert("invalid username or password");
				}
			})
			.catch(error => console.log(error))
	}

	return (
		<>
			<Header />
			<div className="login">
				<input id="usernameField" placeholder="enter username" />
				<input id="passwordField" placeholder="enter password" />
				<button type="submit" onClick={handleLogin}>Login</button>
				<Link to="/registration">if you dont have account then login</Link>
			</div>
		</>
	)
}
