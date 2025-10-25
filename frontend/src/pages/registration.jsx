import { Link, useNavigate } from "react-router";
import '../css/styles.css';

export default function Registration() {
	const navigate = useNavigate();

	function handleRegistration() {
		const username = document.getElementById("usernameField").value;
		const password = document.getElementById("passwordField").value;

		fetch("http://localhost:8000/users.php", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({ username: username, password: password, action: "registration" })
		})
			.then((response) => response.json())
			.then(data => {
				if (data.success) {
					navigate("/login");
				} else {
					alert("something went wrong");
				}
			})
			.catch(error => console.log(error))
	}

	return (
		<>
			<div className="registration">
				<input id="usernameField" placeholder="enter username" />
				<input id="passwordField" placeholder="enter password" />
				<button onClick={handleRegistration}>Registration</button>
				<Link to="/login">if you already have an account</Link>
			</div>
		</>
	)
}
