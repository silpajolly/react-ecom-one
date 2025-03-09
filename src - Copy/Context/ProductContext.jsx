import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `https://fakewoocomapi.github.io/products/`;
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  // const addToCart = () => {
  //   setCartCount((prevCount) => prevCount + 1);
  // };

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id: product.id, image: product.image, title: product.title, price: product.price || 0, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getProductById = (id) => {
    return products.find((product) => product.id === parseInt(id));
  };

  return (
    <ProductContext.Provider
      value={{ products, currentItems, currentPage, totalPages, setCurrentPage, cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        increaseQuantity,
        decreaseQuantity,
        getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};
