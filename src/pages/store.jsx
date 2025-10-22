import '../css/styles.css'
import Header from '../components/header'

export default function Store() {    
    <>
        <Header />
        <main className="product-grid">
            <div className="product-card">
                <img className="product-image" src="src/assets/images/sweet_bun.png" alt="Product Image" />
                    <p>sweet bun</p>
                    <p>$3.59</p>
                    <a href="#"><img className="add-button" src="src/assets/images/add-button.png" alt="Add Button" /></a>
            </div>
            <div className="product-card">
                <img className="product-image" src="src/assets/images/chocolate_cookie.png" alt="Product Image" />
                    <p>chocolate cookie</p>
                    <p>$2.99</p>
                    <a href="#"><img className="add-button" src="src/assets/images/add-button.png" alt="Add Button" /></a>
            </div>
            <div className="product-card">
                <img className="product-image" src="src/assets/images/cinnamon_bun.png" alt="Product Image" />
                    <p>cinnamon bun</p>
                    <p>$1</p>
                    <a href="#"><img className="add-button" src="src/assets/images/add-button.png" alt="Add Button" /></a>
            </div>
            <div className="product-card">
                <img className="product-image" src="src/assets/images/tart2.png" alt="Product Image" />
                    <p>tart</p>
                    <p>$5.10</p>
                    <a href="#"><img className="add-button" src="src/assets/images/add-button.png" alt="Add Button" /></a>
            </div>
            <div className="product-card">
                <img className="product-image" src="src/assets/images/melon_bun.png" alt="Product Image" />
                    <p>melon bum</p>
                    <p>$3.43</p>
                    <a href="#"><img className="add-button" src="src/assets/images/add-button.png" alt="Add Button" /></a>
            </div>
            <div className="product-card">
                <img className="product-image" src="src/assets/images/cinnamon_bun.png" alt="Product Image" />
                    <p>cinnamon bun</p>
                    <p>$2.89</p>
                    <a href="#"><img className="add-button" src="src/assets/images/add-button.png" alt="Add Button" /></a>
            </div>
        </main>
    </>
}