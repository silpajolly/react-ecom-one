import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

function ProductDetails() {
  const { id } = useParams();
  const { getProductById, addToCart } = useContext(ProductContext);
  const product = getProductById(id);

  if (!product) {
    return <div className="text-center mt-5"><h2>Product Not Found</h2></div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Price: ${product.price}</h4>
          <button className="btn btn-primary" onClick={()=>addToCart(product)}> Add to cart </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
