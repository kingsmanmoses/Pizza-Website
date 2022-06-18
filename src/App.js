import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Feature from './components/feature/Feature';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import { productData, productDataTwo } from './components/products/Data';
import Products from './components/products/Products';

function App() {
  return (
    <Router>
      <Hero />
      <Products heading="Choose Your Favorite Pizza" data={productData} />
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
