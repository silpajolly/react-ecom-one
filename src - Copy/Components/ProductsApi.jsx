import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

function ProductsApi() {
  const { currentItems, currentPage, totalPages, setCurrentPage, addToCart  } = useContext(ProductContext);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentItems.map((ele, index) => (
          <div className="col d-flex" key={index}>
            <div className="card" style={{ width: "100%" }}>
              <img src={ele.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">{ele.description}</p>
              </div>
              <div className="card-body">
              <button className="btn btn-primary" onClick={()=>addToCart(ele)}> Add to cart </button>
              <Link to={`/products/${ele.id}`} className="btn btn-secondary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsApi;
