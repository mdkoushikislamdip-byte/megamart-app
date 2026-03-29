import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  // Listen for addToCart updates
  useEffect(() => {
    const handleCartUpdate = () => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    };
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  // Update quantity
  const updateQty = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQty = type === "inc" ? item.qty + 1 : item.qty - 1;
        return {
          ...item,
          qty: newQty > 0 ? newQty : 1,
          total: item.price * (newQty > 0 ? newQty : 1),
          discountedTotal:
            item.price * (newQty > 0 ? newQty : 1) -
            (item.price *
              (newQty > 0 ? newQty : 1) *
              (item.discountPercentage || 0)) /
              100,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Delete item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0)
    return (
      <p className="text-center mt-10 text-gray-700">Your cart is empty</p>
    );

  const totalPrice = cart.reduce((sum, item) => sum + item.discountedTotal, 0);

  // WhatsApp link for single item
  const handleBuyNow = (item) => {
    const message = `Hello! I want to buy:\n${item.name}\nQuantity: ${item.qty}\nTotal: $${item.discountedTotal}`;
    const phone = "8801793544642";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // WhatsApp link for all items
  const handleBuyAll = () => {
    let message = "Hello! I want to buy the following items:\n";
    cart.forEach((item) => {
      message += `\n${item.name} - Qty: ${item.qty} - Total: $${item.discountedTotal}`;
    });
    message += `\n\nTotal Price: $${totalPrice}`;
    const phone = "8801793544642"; // 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-wrap justify-between items-center bg-white p-4 rounded-xl shadow mb-4"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg"
          />

          <div className="flex-1 ml-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">
              Price: $ {item.discountedTotal} | Qty:
            </p>
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={() => updateQty(item.id, "dec")}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-2 font-medium">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, "inc")}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-end">
            {/* Delete button on top */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700 font-bold text-xl"
            >
              <FiTrash2 />
            </button>

            {/* Buy Now below delete */}
            <button
              onClick={() => handleBuyNow(item)}
              className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition mt-1"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}

      {/* Buy All Button */}
      {cart.length > 1 && (
        <div className="text-right mt-4">
          <button
            onClick={handleBuyAll}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Buy All
          </button>
        </div>
      )}

      <div className="text-right mt-4 font-bold text-lg">
        Total: $ {totalPrice}
      </div>
    </div>
  );
};

export default Cart;
