import '../css/styles.css'
import Header from '../components/header'

export default function AboutUs() {
    return (
        <>
            <Header />
            <main>
                <section className="about-section">
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Welcome to Sweet Creations – your ultimate destination for delightful treats and dessert-making mastery! At Sweet Creations, we believe that desserts are more than just food—they’re an experience, a moment of joy, and a way to bring people together. Our store offers a wide selection of handcrafted sweets, from rich chocolates and creamy pastries to delicate macarons and artisanal cakes. Every treat is made with love, high-quality ingredients, and a passion for perfection.
                            But we don’t just create sweets—we teach you how to make them, too! Our expert-led courses are designed for beginners and aspiring pastry chefs alike. Whether you want to master the art of cake decorating, perfect your macaron technique, or explore the secrets of classic desserts, we have a class for you.
                            Join us on a delicious journey where every bite is a masterpiece, and every lesson brings you closer to becoming a dessert expert.
                            Come visit us and indulge in the world of sweets!
                        </p>
                    </div>
                </section>

                <section className="images-section">
                    <img src="src/assets/images/baking-class.jpeg" alt="Image 1" />
                    <img src="src/assets/images/bakery-shop-interior.webp" alt="Image 2" />
                    <img src="src/assets/images/desserts.jpg" alt="Image 3" />
                    <img src="src/assets/images/staff.webp" alt="Image 4" />
                </section>

                <section className="values-section">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <article className="value-card--orange">
                            <div className="value-icon">❤️</div>
                            <h3>Passion</h3>
                            <p>We pour our hearts into every creation, ensuring each treat is made with genuine care and enthusiasm.</p>
                        </article>
                        <article className="value-card--blue">
                            <div className="value-icon">🌟</div>
                            <h3>Quality</h3>
                            <p>Only the finest ingredients meet our standards, because you deserve nothing less than excellence.</p>
                        </article>
                        <article className="value-card--red">
                            <div className="value-icon">👩‍🍳</div>
                            <h3>Community</h3>
                            <p>We believe in sharing knowledge and creating spaces where dessert lovers can learn and grow together.</p>
                        </article>
                    </div>
                </section>
            </main> 
        </>
    )
}