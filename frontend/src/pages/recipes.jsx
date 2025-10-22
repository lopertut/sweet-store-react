import '../css/styles.css'
import Header from '../components/header'

export default function Recipes() {
    return (
        <>
            <Header />
            <main className="product-grid">
                <div className="recipes-card">
                    <img className="recipes-image" src="src/assets/images/fudge-Brownie.webp" alt="Chocolate Brownies" />
                    <p>Chocolate Fudge Brownies</p>
                    <p>estimate time 40 min</p>
                    <p>Dark chocolate, butter, sugar, eggs, flour, walnuts</p>
                </div>
                <div className="recipes-card">
                    <img className="recipes-image" src="src/assets/images/strawberry-cheesecake.jpg" alt="Strawberry Cheesecake" />
                    <p>No-Bake Strawberry Cheesecake</p>
                    <p>estimate time 1 h</p>
                    <p>Digestive biscuits, cream cheese, strawberries, gelatin, whipped cream</p>
                </div>
                <div className="recipes-card">
                    <img className="recipes-image" src="src/assets/images/french-macarons.jpg" alt="Macarons" />
                    <p>French Macarons</p>
                    <p>estimate time 20 min</p>
                    <p>Almond flour, powdered sugar, egg whites, food coloring, ganache</p>
                </div>
                <div className="recipes-card">
                    <img className="recipes-image" src="src/assets/images/tiramisu.jpg" alt="Tiramisu" />
                    <p>classNameic Tiramisu</p>
                    <p>estimate time 2.30 h</p>
                    <p>Ladyfingers, mascarpone, coffee, cocoa powder, eggs, Marsala wine</p>
                </div>
                <div className="recipes-card">
                    <img className="recipes-image" src="src/assets/images/gooey-cinnamon-rolls.jpg" alt="Cinnamon Rolls" />
                    <p>Gooey Cinnamon Rolls</p>
                    <p>estimate time 45 min</p>
                    <p>Flour, yeast, butter, brown sugar, cinnamon, cream cheese frosting</p>
                </div>
                <div className="recipes-card">
                    <img className="recipes-image" src="src/assets/images/chocolate-cookies-recipes.webp" alt="Chocolate Chip Cookies" />
                    <p>Chewy Chocolate Chip Cookies</p>
                    <p>estimate time 30 min</p>
                    <p>Flour, chocolate chips, butter, brown sugar, vanilla extract, baking soda</p>
                </div>
            </main>
        </>
    )
}