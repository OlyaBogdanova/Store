import ProductsPage from './pages/productsPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import Navigation from './components/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    path='/'
                    element={<ProductsPage />}
                />
                <Route
                    path='/about'
                    element={<AboutPage />}
                />
            </Routes>
        </>
    );
}

export default App;
