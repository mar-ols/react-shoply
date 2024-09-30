import { createContext, useState, useEffect } from "react";
import * as save from "../localStorage";

/* eslint-disable react/prop-types */

// Create the context
export const CartContext = createContext();

// Cart provider to wrap around the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Get the cart from localStorage (if it exists) when the component mounts
    return save.LoadCart("cart") || [];
  });

  useEffect(() => {
    save.SaveCart("cart", cartItems);
  }, [cartItems]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]); // Add new item to the array
  };

  // Function to remove an item from the cart (if needed)
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId); // Remove item by id
    setCartItems(updatedCart); // Update state
    save.SaveCart("cart", updatedCart); // Save updated cart to localStorage
  };

  // Provide the cart state and functions to all children
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
