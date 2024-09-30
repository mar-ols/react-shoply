import { createContext, useState, useEffect } from "react";
import * as save from "../localStorage";

/* eslint-disable react/prop-types */

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return save.LoadCart("cart") || [];
  });

  useEffect(() => {
    save.SaveCart("cart", cartItems);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    save.SaveCart("cart", updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    save.SaveCart("cart", []);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
