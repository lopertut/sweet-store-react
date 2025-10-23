import '../css/styles.css'
import Header from '../components/header'
import { useEffect, useState } from 'react';

export default function Store() {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/sweets.php")
			.then((response) => response.json())
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
					<div className='product-card'>
						<img className="product-image" src={product.imageUrl} alt="Product Image" />
						<p>{product.name}</p>
						<p>{product.price}</p>
						<a href="#"><img className="add-button" src="src/assets/images/add-button.png" alt="Add Button" /></a>
					</div>
				))}
			</main>
		</>
	)
}
