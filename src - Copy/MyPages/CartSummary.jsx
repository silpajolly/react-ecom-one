import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

function CartSummary() {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(ProductContext);

    // Calculate total price of all items
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

    return (
        <div className="container mt-5">
            <h2>Cart Summary</h2>
            {cartItems.length > 0 ? (
                <div>
                    <ul className="list-group">
                        {cartItems.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.image} alt={item.title} className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                    </Link>
                                    <div>
                                        <span>{item.title} - ${item.price ? item.price.toFixed(2) : "N/A"}</span>
                                        <div className="mt-2">
                                            <button className="btn btn-sm btn-secondary me-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button className="btn btn-sm btn-primary ms-2" onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong>
                                </div>

                                {/* Remove Button */}
                                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h4>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartSummary;
