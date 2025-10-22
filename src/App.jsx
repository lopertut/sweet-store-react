import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home'
import AboutUs from './pages/about-us';
import Store from './pages/store';
import Cart from './pages/cart'
import Recipes from './pages/recipes'


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='store' element={<Store />} />
				<Route path='about-us' element={<AboutUs />} />
				<Route path='store' element={<Store />} />
				<Route path='recipes' element={<Recipes />} />
				<Route path='cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
