import { Link, useNavigate } from "react-router";
import Header from '../components/header';
import '../css/styles.css';

export default function Registration() {
	const navigate = useNavigate();

	function handleRegistration() {

		const username = document.getElementById("usernameField").value;
		const password = document.getElementById("passwordField").value;

		fetch("http://localhost:8000/users.php", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({
				username: username,
				password: password,
				action: "registration"
			})
		})
			.then((response) => response.json())
			.then(data => {
				if (data.success) {
					navigate("/");
				} else {
					alert("Something went wrong");
				}
			})
			.catch(error => console.error("Error:", error));
	}

	return (
		<>
			<Header />
			<div className="authentication">
				<label htmlFor="usernameField">Username</label>
				<input type="text" id="usernameField" required />

				<label htmlFor="passwordField">Password</label>
				<input
					type="password"
					id="passwordField"
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
					title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters"
					required
				/>

				<button className="auth-button" onClick={handleRegistration}>Register</button>
				<Link to="/login">If you already have an account</Link>
			</div>

			<div className="message">
				<h3>Password must contain the following:</h3>
				<p>A <b>lowercase</b> letter</p>
				<p>A <b>capital (uppercase)</b> letter</p>
				<p>A <b>number</b></p>
				<p>Minimum <b>8 characters</b></p>
			</div>
		</>
	);
}
