import '../css/styles.css'
import Header from '../components/header'
import { useEffect, useState } from 'react';
import checkSession from '../utils/checkSession.js';

export default function Store() {
	const [products, setProduct] = useState([]);
	const [loggedIn, setLoggedIn] = useState();

	useEffect(() => {
		checkSession(setLoggedIn);
	}, [])

	useEffect(() => {
		fetch("http://localhost:8000/sweets.php")
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setProduct(data)
			})
			.catch(error => console.log(error))
	}, []);

	function addCartItem(sweetId) {
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

	return (
		<>
			<Header />
			<main className="product-grid">
				{products.map((product) => (
					<div className='product-card' key={product.id}>
						<img className="product-image" src={product.imageUrl} alt="Product Image" />
						<p>{product.name}</p>
						<p>{product.price}</p>
						<a href="#"><img className="add-button" onClick={() => addCartItem(product.id)} src="src/assets/images/add-button.png" alt="Add Button" /></a>
					</div>
				))}
			</main>
		</>
	)
}
