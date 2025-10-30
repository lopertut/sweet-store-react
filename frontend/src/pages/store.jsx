import '../css/styles.css'
import Header from '../components/header'
import { useEffect, useState } from 'react';

export default function Store() {
	const [products, setProduct] = useState([]);
	const [cartId, setCartid] = useState();

	useEffect(() => {
		fetch("http://localhost:8000/sweets.php")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setProduct(data)
			})
			.catch(error => console.log(error))
	}, []);

	useEffect(() => {
		fetch("http://localhost:8000/carts.php", {
			credentials: "include"
		})
			.then(response => response.json())
			.then(data => {
				console.log(data.cartId);
				setCartid(data.cartId)
			})
			.catch(error => console.log(error))
	})

	function addCartItem(cartId, sweetId) {
		let called = false;
		fetch("http://localhost:8000/carts.php", {
			method: "POST",
			body: JSON.stringify({ cartId: cartId, sweetId: sweetId, quantity: 1 })
		})
			.catch(error => console.log(error))
		called = true;
	}

	return (
		<>
			<Header />
			<main className="product-grid">
				{products.map((product) => (
					<div className='product-card'>
						<img className="product-image" src={product.imageUrl} alt="Product Image" />
						<p>{product.name}</p>
						<p>{product.price}</p>
						<a href="#"><img className="add-button" onClick={() => addCartItem(cartId, product.id)} src="src/assets/images/add-button.png" alt="Add Button" /></a>
					</div>
				))}
			</main>
		</>
	)
}
