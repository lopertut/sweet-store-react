export default function addCartItem(sweetId, loggedIn) {
	if (!loggedIn) {
		alert("you must be logged in")
	} else {
		fetch("http://localhost:8000/carts.php", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({sweetId: sweetId, quantity: 1 })
		})
			.catch(error => console.log(error))
	}
}
