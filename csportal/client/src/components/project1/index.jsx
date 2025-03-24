import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function Products() {
  return (
    <div>
        <h1>Products</h1>
        <Routes>
            <Route path="/" element={<ProductList />} /> {/* Default route */}
            <Route path=":productId" element={<ProductDetails />} /> {/* Nested route */}
        </Routes>
    </div>
  );
}

export default Products;
