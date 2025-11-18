import '../css/styles.css';
import Header from '../components/header';
import { useEffect, useState } from "react";
import addCartItem from "../utils/addCartItem.js";
import checkSession from "../utils/checkSession.js";

export default function Home() {
	const [topProducts, setTopProducts] = useState([]);
	const [loggedIn, setLoggedIn] = useState();

	useEffect(() =>{
		checkSession(setLoggedIn);
	}, [])
	
	useEffect(() => {
		fetch("http://localhost:8000/topPicks.php")
		.then(response => response.json())
		.then(data => {
				console.log(data);
				setTopProducts(data);	
			})
		.catch(error => console.log(error))
	}, [])


	return (
		<>
			<Header />
			<main>
				<section className="sweet-banner">
					<h1>SWEEEEEE<br />EEEEEEET!</h1>
					<p>Freshly crafted treats,<br />made just for you</p>

					<img src="/assets/images/chocolate_cookie.png" className="food food-1" alt="Food Image" />
					<img src="/assets/images/melon_bun.png" className="food food-2" alt="Food Image" />
					<img src="/assets/images/croissant.png" className="food food-3" alt="Food Image" />
					<img src="/assets/images/sweet_bun.png" className="food food-4" alt="Food Image" />
					<img src="/assets/images/tart2.png" className="food food-5" alt="Food Image" />
					<img src="/assets/images/cinnamon_bun.png" className="food food-6" alt="Food Image" />
				</section>

				<section className="school">
					<h2>SCHOOL</h2>
					<p>Learn to bake deliciously</p>
					<img className="explore-button" src="/assets/images/explore-button.png" alt="Explore Button" />
					<img className="skalka-img" src="/assets/images/skalka.png" alt="Skalka Image" />
					<img className="join-now-png" src="/assets/images/join_now.png" alt="Join Now Png" />
				</section>

				<section className="everyday">
					<h2>EVERYDAY</h2>
					<p>Freshly baked, delivered daily right to your door!</p>
					<img className="tart-image" src="/assets/images/tart.png" alt="Tart Image" />
				</section>

				<section className="top-picks">
					<h2>TOP<br />PICKS</h2>
					<div className="items-container">
						{topProducts.map((product) => (
							<div className="item" key={product.sweetId}>
								<div className="image" style={{ backgroundImage: 'url({product.url})' }}></div>
								<div className="name">{product.name}</div>
								<div className="price">{product.price}<span>each</span></div>
								<button className="plus-button" onClick={() => addCartItem(product.sweetId, loggedIn)}>+</button>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
}
