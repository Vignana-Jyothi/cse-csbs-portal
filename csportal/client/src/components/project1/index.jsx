import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Navbar from '../Navbar';

function Products() {
  return (
    <div>
        <Navbar />
        <br/>
        <hl />
        <h1>Products</h1>
        <Routes>
            <Route path="/" element={<ProductList />} /> {/* Default route */}
            <Route path=":productId" element={<ProductDetails />} /> {/* Nested route */}
        </Routes>
    </div>
  );
}

export default Products;
