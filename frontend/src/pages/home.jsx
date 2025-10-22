import '../css/styles.css'
import Header from '../components/header'

export default function Home() {
	return (
		<>
			{fetch('http://localhost:8000/sweets.php').then(response => response.json())}
			<Header />
			<main>
				<section className="sweet-banner">
					<h1>SWEEEEEE<br />EEEEEEET!</h1>
					<p>Freshly crafted treats,<br />made just for you</p>

					<img src="src/assets/images/chocolate_cookie.png" className="food food-1" alt="Food Image" />
					<img src="src/assets/images/melon_bun.png" className="food food-2" alt="Food Image" />
					<img src="src/assets/images/croissant.png" className="food food-3" alt="Food Image" />
					<img src="src/assets/images/sweet_bun.png" className="food food-4" alt="Food Image" />
					<img src="src/assets/images/tart2.png" className="food food-5" alt="Food Image" />
					<img src="src/assets/images/cinnamon_bun.png" className="food food-6" alt="Food Image" />
				</section>

				<section className="school">
					<h2>SCHOOL</h2>
					<p>Learn to bake deliciously</p>
					<img className="explore-button" src="src/assets/images/explore-button.png" alt="Explore Button" />
					<img className="skalka-img" src="src/assets/images/skalka.png" alt="Skalka Image" />
					<img className="join-now-png" src="src/assets/images/join_now.png" alt="Join Now Png" />
				</section>

				<section className="everyday">
					<h2>EVERYDAY</h2>
					<p>Freshly baked, delivered daily right to your door!</p>
					<img className="tart-image" src="src/assets/images/tart.png" alt="Tart Image" />
				</section>

				<section className="top-picks">
					<h2>TOP<br />PICKS</h2>
					<div className="items-container">
						<div className="item">
							<div className="image" style={{ backgroundUrl: 'url(src/assets/images/chocolate_cookie.png)' }}></div>
							<div className="name">Chocolate Biscuit</div>
							<div className="desc">cookie with rich chocolate flavor</div>
							<div className="price">$3.99 <span>each</span></div>
							<input className='plus-button' type='image' src='src/assets/images/plus-button.png' />
						</div>
						<div className="item">
							<div className="image" style={{ backgroundUrl: 'url(src/assests/images/melon_bum.png>)' }}></div>
							<div className="name">Melon Bun</div>
							<div className="desc">Light bun with smooth filling</div>
							<div className="price">$5.50 <span>each</span></div>
							<input className='plus-button' type='image' src='src/assets/images/plus-button.png' />
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
