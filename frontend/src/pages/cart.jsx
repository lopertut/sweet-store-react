import '../css/styles.css'
import Header from '../components/header'
import { useEffect, useState } from 'react';

export default function Cart() {
	const [cartItems, setCartItems] = useState([]);
	const [cartId, setCartid] = useState();

	useEffect(() => {
		fetch("http://localhost:8000/carts.php", {
			credentials: "include"
		})
			.then(response => response.json())
			.then(data => {
				setCartid(data.cartId);
			})
			.catch(error => console.log(error))
	}, [])

	useEffect(() => {
		fetch(`http://localhost:8000/carts.php?cartId=${cartId}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setCartItems(data);
			})
			.catch(error => console.log(error))
	}, [cartId])

	async function handleDelete(cartId, sweetId, quantity) {
		await fetch("http://localhost:8000/carts.php", {
			method: "DELETE",
			body: JSON.stringify({ "cartId": cartId, "sweetId": sweetId, "quantity": quantity })
		})
			.catch(error => console.log(error))
		location.reload();
	}

	return (
		<>
			<Header />
			<main>
				<div className="cart">
					<h2>Shopping Cart</h2>
					<div className="cart-items">
						{cartItems.map((cartItem) => (
							<div key={cartItem.sweetId} className="cart-item">
								<div className="cart-item-info">
									<div><strong>{cartItem.name}</strong></div>
									<div>Price: {cartItem.price}</div>
								</div>
								<div>Quantity: {cartItem.quantity}</div>
								<button onClick={() => handleDelete(cartId, cartItem.sweetId, 1)}>Delete</button>
								<button onClick={() => handleDelete(cartId, cartItem.sweetId, cartItem.quantity)}>Delete all</button>
							</div>
						))}
					</div>
				</div>
			</main >
		</>
	)
}
