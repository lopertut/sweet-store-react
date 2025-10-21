import './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home'
import AboutUs from './pages/about-us';
import Store from './pages/store';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='store' element={<Store />} />
                <Route path='about-us' element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App