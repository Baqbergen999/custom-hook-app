import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeFromCart = (index) =>
    setCart((prev) => prev.filter((_, i) => i !== index));

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, showCart, setShowCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
