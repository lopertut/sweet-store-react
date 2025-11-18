import '../css/styles.css'
import Header from '../components/header'
import { useEffect, useState } from 'react';
import checkSession from '../utils/checkSession.js';
import addCartItem from "../utils/addCartItem.js";

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

	return (
		<>
			<Header />
			<main className="product-grid">
				{products.map((product) => (
					<div className='product-card' key={product.id}>
						<img className="product-image" src={product.imageUrl} alt="Product Image" />
						<p>{product.name}</p>
						<p>{product.price}</p>
						<button className="add-button" onClick={ () => addCartItem(product.id, loggedIn)}>Add</button>
					</div>
				))}
			</main>
		</>
	)
}
