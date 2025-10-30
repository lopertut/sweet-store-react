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
				setCartid(data.cartId)
			})
			.catch(error => console.log(error))
	}, [])

	useEffect(() => {
		fetch(`http://localhost:8000/carts.php?cartId=${cartId}`)
			.then(response => response.json())
			.then(data => {
				setCartItems(data);
			})
			.catch(error => console.log(error))
	}, [cartId])

	return (
		<>
			<Header />
			<main>
				<div className="cart">
					<h2>Shopping Cart</h2>
					<div className="cart-items">
						{cartItems.map((cartItem) => (
							<div key={cartItem.id} className="cart-item">
								<div className="cart-item-info">
									<div><strong>{cartItem.name}</strong></div>
									<div>Price: {cartItem.price}</div>
								</div>
								<div>Quantity: {cartItem.quantity}</div>
							</div>
						))}
					</div>
				</div>
			</main >
		</>
	)
}
