import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "cash",
  });

  const [deliveryCharge, setDeliveryCharge] = useState(110);
  const [error, setError] = useState("");

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  useEffect(() => {
    if (formData.address.toLowerCase().includes("dhaka")) {
      setDeliveryCharge(60);
    } else if (formData.address.trim() === "") {
      setDeliveryCharge(110);
    } else {
      setDeliveryCharge(110);
    }
  }, [formData.address]);

  const applyCoupon = () => {
    const trimmed = coupon.trim().toLowerCase();
    let discountAmount = 0;
    let message = "";

    if (trimmed === "summertime") {
      discountAmount = subtotal * 0.15;
      message = "15% discount applied!";
    } else if (trimmed === "flashsale") {
      discountAmount = 150;
      message = "Flat BDT150 discount applied!";
    } else if (trimmed === "eidsale") {
      discountAmount = subtotal * 0.2;
      message = "20% Eid Sale discount applied!";
    } else if (trimmed === "pujasale") {
      discountAmount = subtotal * 0.1;
      message = "10% Puja Sale discount applied!";
    } else if (trimmed === "wintersale") {
      discountAmount = 100;
      message = "Flat BDT100 Winter Sale discount applied!";
    } else if (trimmed === "student") {
      discountAmount = subtotal * 0.25;
      message = "25% discount for hope you will study well!";
    } else if (trimmed === "newyear") {
      discountAmount = subtotal * 0.3;
      message = "30% New Year discount applied!";
    } else if (trimmed === "seyam") {
      discountAmount = subtotal * 0.5;
      message = "50%  OMG! You are Seyam known. Great discount applied!";
    } else if (trimmed === "rintu") {
      discountAmount = subtotal * 0.4;
      message = "40% OMG! You are Rintu known. Great discount applied!";
    } else {
      setDiscount(0);
      setCouponMessage("❌ Invalid coupon code.");
      return;
    }

    setDiscount(discountAmount);
    setCouponMessage(`✅ ${message}`);
  };

  const totalPrice = Math.max(subtotal + deliveryCharge - discount, 0);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.address.trim() || !formData.phone.trim()) {
      setError("Please fill in your name, address, and phone number.");
      return;
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setError("Please enter a valid phone number (10-11 digits).");
      return;
    }

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setError("");

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: `Thank you, ${formData.name}! Your order has been placed successfully.`,
      timer: 2500,
      showConfirmButton: false,
      timerProgressBar: true,
      background: "#f0f9ff",
      iconColor: "#6b46c1",
    });

    clearCart();
    setFormData({
      name: "",
      address: "",
      phone: "",
      paymentMethod: "cash",
    });
    setCoupon("");
    setDiscount(0);
    setCouponMessage("");
  };

  // New: Confirm before removing item
  const handleRemoveItem = (id, name) => {
    Swal.fire({
      title: `Remove "${name}"?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        Swal.fire({
          icon: "success",
          title: "Removed!",
          text: `"${name}" has been removed from your cart.`,
          timer: 1800,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }
    });
  };

  // New: Confirm before clearing cart
  const handleClearCart = () => {
    Swal.fire({
      title: "Clear your cart?",
      text: "All items will be removed. Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          icon: "success",
          title: "Cleared!",
          text: "Your cart is now empty.",
          timer: 1800,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-base sm:text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded-md"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 sm:w-16 sm:h-16 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-lg sm:text-base">{item.name}</h4>
                    <p className="text-sm sm:text-base">Qty: {item.qty}</p>
                  </div>
                </div>
                <div className="text-right mt-4 sm:mt-0 w-full sm:w-auto">
                  <p className="font-bold text-lg sm:text-base">
                    BDT{(item.price * item.qty).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="btn btn-sm btn-error mt-2 w-full sm:w-auto"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Coupon Section */}
          <div className="mt-6 border p-4 rounded-md bg-white space-y-3">
            <h4 className="font-semibold text-lg">Have a Coupon?</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="input input-bordered w-full"
              />
              <button type="button" onClick={applyCoupon} className="btn btn-accent w-full sm:w-auto">
                Apply Coupon
              </button>
            </div>
            {couponMessage && (
              <p className={`text-sm ${discount > 0 ? "text-green-600" : "text-red-600"}`}>
                {couponMessage}
              </p>
            )}
            {discount > 0 && (
              <p className="font-medium text-sm text-gray-700">Discount: BDT{discount.toFixed(2)}</p>
            )}
          </div>

          {/* Summary */}
          <div className="text-right mt-6 space-y-1 text-base sm:text-lg">
            <p className="font-semibold">Subtotal: BDT{subtotal.toFixed(2)}</p>
            <p className="font-semibold">Delivery Charge: BDT{deliveryCharge.toFixed(2)}</p>
            {discount > 0 && (
              <p className="font-semibold text-green-600">Discount: -BDT{discount.toFixed(2)}</p>
            )}
            <p className="font-bold text-xl sm:text-2xl">Total: BDT{totalPrice.toFixed(2)}</p>
            <button
              onClick={handleClearCart}
              className="btn btn-outline btn-warning mt-2 w-full sm:w-auto"
            >
              Clear Cart
            </button>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 border p-6 rounded-md bg-gray-50">
            <h3 className="text-xl sm:text-2xl font-semibold">Checkout</h3>

            {error && <p className="text-red-600 text-sm sm:text-base">{error}</p>}

            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-sm sm:text-base">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium text-sm sm:text-base">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="e.g. 017XXXXXXXX"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1 font-medium text-sm sm:text-base">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="textarea textarea-bordered w-full"
                placeholder="Include 'Dhaka' in your address if applicable"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base">Total Quantity</label>
              <input
                type="number"
                value={cartItems.reduce((sum, item) => sum + item.qty, 0)}
                readOnly
                className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base">Total Price (with Delivery)</label>
              <input
                type="text"
                value={`BDT${totalPrice.toFixed(2)}`}
                readOnly
                className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block mb-1 font-medium text-sm sm:text-base">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="cash">Cash on delivery</option>
                <option value="bkash">bKash</option>
                <option value="nagad">Nagad</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-full text-lg sm:text-base">
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
