import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { ProductContext } from './Context/ProductContext';

function Nav() {
    const { cartCount } = useContext(ProductContext)
    const navigate = useNavigate()

    const handleCartClick = (e) => {
        if (cartCount > 0) {
            navigate('/cart-summary');
        } else {
            alert("Your cart is empty!");
            e.preventDefault();
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                    <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  dsbld" href="#" tabIndex="-1" >Disabled ----</a>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <div onClick={handleCartClick}>
                                        <Link to="#" className='add_cart' >
                                            <FiShoppingCart />  <span className='crt_count'>{cartCount}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Nav
