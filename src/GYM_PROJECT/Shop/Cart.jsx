import { useEffect, useRef, useState } from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, showCart, setShowCart } = useCart();
  const cartRef = useRef(null);
  const [pay, setPay] = useState(false);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !cardNumber || !expiryDate || !cvv) {
      alert("Fill in all fields!");
    } else {
      alert("Payment successful!");
      setPay(false);  
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart, setShowCart]);

  if (!showCart) return null;

  const handlePay = () => {
    const total = cart.reduce((total, item) => total + item.price, 0);
    setPay(true);
  };

  return (
    <div
      ref={cartRef}
      className="fixed top-20 right-10 bg-white shadow-2xl rounded-xl p-6 z-50 w-[400px] border"
    >
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}.00</p>
              </div>
              <button
                className="noselect"
                onClick={() => removeFromCart(index)}
              >
                <span className="text">Delete</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <p className="text-lg font-semibold">
            Total: ${cart.reduce((total, item) => total + item.price, 0)}.00
          </p>
          <button className="Btn" onClick={handlePay}>
            Pay
            <svg className="svgIcon" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg>
          </button>
        </div>
      )}

      {pay && (
        <div
          style={{ backgroundColor: "#00000063" }}
          className="fixed inset-0 z-40"
        ></div>
      )}

      {pay && (
        <form
          onSubmit={handleSubmit}
          className="fixed inset-0 flex items-center justify-center bg-[#00000063] z-50"
        >
          <div className="bg-[#0c0f14] flex flex-col gap-4 p-5 relative rounded-[25px] h-[450px] justify-center">
            <label className="flex flex-col gap-1 relative">
              <span className="text-xs text-[#8b8e98] font-semibold absolute top-0 left-4 bg-[#0c0f14] px-2 transition-all">
                Card holder full name
              </span>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[50px] pl-4 pr-2 rounded-[15px] bg-transparent border border-[#21262e] text-[#aeaeae] outline-none transition-all caret-[#d17842] focus:border-[#d17842] hover:border-[#d17842]/50"
              />
            </label>

            <label className="flex flex-col gap-1 relative">
              <span className="text-xs text-[#8b8e98] font-semibold absolute top-0 left-4 bg-[#0c0f14] px-2 transition-all">
                Card Number
              </span>
              <input
                type="number"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="h-[50px] pl-4 pr-2 rounded-[15px] bg-transparent border border-[#21262e] text-[#aeaeae] outline-none transition-all caret-[#d17842] focus:border-[#d17842] hover:border-[#d17842]/50"
              />
            </label>

            <div className="flex gap-4">
              <label className="flex flex-col gap-1 relative w-full">
                <span className="text-xs text-[#8b8e98] font-semibold absolute top-0 left-4 bg-[#0c0f14] px-2 transition-all">
                  Expiry Date
                </span>
                <input
                  type="text"
                  placeholder="01/23"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="h-[50px] pl-4 pr-2 rounded-[15px] bg-transparent border border-[#21262e] text-[#aeaeae] outline-none transition-all caret-[#d17842] focus:border-[#d17842] hover:border-[#d17842]/50"
                />
              </label>

              <label className="flex flex-col gap-1 relative w-full">
                <span className="text-xs text-[#8b8e98] font-semibold absolute top-0 left-4 bg-[#0c0f14] px-2 transition-all">
                  CVV
                </span>
                <input
                  type="number"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="h-[50px] pl-4 pr-2 rounded-[15px] bg-transparent border border-[#21262e] text-[#aeaeae] outline-none transition-all caret-[#d17842] focus:border-[#d17842] hover:border-[#d17842]/50"
                />
              </label>
            </div>

            <input
              type="submit"
              value="Checkout"
              className="mt-5 py-5 rounded-[25px] text-white font-medium text-lg cursor-pointer border-2 border-transparent bg-[#d17842] transition-all hover:bg-transparent hover:text-[#d17842] hover:border-[#d17842] active:scale-95"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Cart;
