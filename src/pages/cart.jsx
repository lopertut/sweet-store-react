import '../css/styles.css'
import Header from '../components/header'

export default function Cart() {
	return (
		<>
			<Header />
			<main>
				<div className="cart">
					<h2>Shopping Cart</h2>
					<div className="cart-items">
						<div className="cart-item">
							<div className="cart-item-info">
								<div><strong>tart</strong></div>
								<div>Price: $1.67</div>
							</div>
							<div>Quantity: 2</div>
						</div>

						<div className="cart-item">
							<div className="cart-item-info">
								<div><strong>melon bun</strong></div>
								<div>Price: $2.00</div>
							</div>
							<div>Quantity: 1</div>
						</div>

						<div className="cart-item">
							<div className="cart-item-info">
								<div><strong>tiramisu</strong></div>
								<div>Price: $2.78</div>
							</div>
							<div>Quantity: 1</div>
						</div>
					</div>

					<div className="cart-total">
						<div>Total: $8.44</div>
					</div>
				</div>
			</main>
		</>
	)
}
