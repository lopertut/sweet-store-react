export default function checkSession(setLoggedIn) {
	fetch("http://localhost:8000/check-session.php", {
		credentials: "include"
	})
		.then(response => response.json())
		.then(data => {
			if (data.loggedIn) {
				console.log("user logged in: ", data.userId);
				return setLoggedIn[data.userId];
			} else {
				console.log("user is not logged in");
				return false;
			}
		})
}
