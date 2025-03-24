import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { productId } = useParams(); // Access dynamic parameter
  return (
    <div>
      <h2>Product Details for Project 1</h2>
      <p>Details for Product ID: {productId}</p>
    </div>
  );
}

export default ProductDetails;
