export default function checkSession(setter) {
	fetch("http://localhost:8000/check-session.php", {
		credentials: "include"
	})
		.then(response => response.json())
		.then(data => {
			if (data.loggedIn) {
				return setter(true);
			} else {
				return setter(false);
			}
		})
}
