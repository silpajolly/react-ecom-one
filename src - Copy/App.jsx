import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './MyPages/Home';
import About from './MyPages/About';
import ProductsAll from './MyPages/ProductsAll';
import { ProductProvider } from './Context/ProductContext';
import ProductDetails from './MyPages/ProductDetails';
import CartSummary from './MyPages/CartSummary';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsAll />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart-summary" element={<CartSummary />} />
            <Route path="/*" element={
              <div className="text-center mt-5 pt-5">  <h2> 404</h2>  <p> Error page not found  </p> </div>
            } />
          </Routes>
        </Router>
      </ProductProvider>
    </>
  )
}

export default App
