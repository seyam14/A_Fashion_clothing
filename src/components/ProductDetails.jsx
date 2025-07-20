import { useParams, useNavigate } from "react-router-dom"; 
import products from "../data/products";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  if (!product) {
    return <div className="text-center text-red-600 py-10">Product not found.</div>;
  }

  const hasDiscount =
    product.discount &&
    product.discountEndsAt &&
    new Date(product.discountEndsAt) > new Date();

  const finalPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const handleAddToCart = () => {
    if (!acceptedTerms) {
      Swal.fire({
        icon: "warning",
        title: "Please accept the rules and terms",
        text: "You must accept the rules and terms before adding the product to the cart.",
      });
      return;
    }

    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${product.name} added successfully.`,
      timer: 2000,
      showConfirmButton: false,
      willClose: () => {
        navigate("/products");  
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-24 px-4 grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      {/* Product Image */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-purple-800">{product.name}</h1>

        <div className="text-xl">
          {hasDiscount ? (
            <div className="flex items-center gap-3">
              <span className="text-red-600 font-bold text-2xl">
                BDT {finalPrice.toFixed(2)}
              </span>
              <span className="line-through text-gray-400">
                BDT {product.price}
              </span>
              <span className="badge badge-success">{product.discount}% OFF</span>
            </div>
          ) : (
            <span className="text-indigo-600 font-semibold text-2xl">
              BDT {product.price}
            </span>
          )}
        </div>

        <p className="text-gray-600">{product.description}</p>

        <div className="flex gap-4 flex-wrap">
          <span className="badge badge-outline">Size: {product.size}</span>
          <span className="badge badge-outline">Color: {product.color}</span>
          <span className="badge badge-outline">Category: {product.category}</span>
        </div>

        {/* Rules and Terms */}
        <div className="border rounded-md p-4 max-h-48 overflow-y-auto bg-gray-50 text-sm text-gray-700">
          <h3 className="font-semibold mb-2">Rules and Terms</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>All sales are final. No refunds or exchanges but based on strong reason.</li>
            <li>Discounted products are <strong>non-refundable</strong>.</li>
            <li>Products are subject to availability.</li>
            <li>Please verify your size and color before purchase.</li>
            <li>Discounts are valid only during promotional periods.</li>
            <li>Delivery times may vary based on location.</li>
            <li>Delivery charge must be paid before product delivery.</li>
            <li>Orders may be delayed due to unforeseen circumstances.</li>
            <li>Contact support for any product-related queries.</li>
            <li>Payment confirmation is required for processing your order.</li>
            <li>By placing an order, you agree to these rules and terms.</li>
          </ul>
        </div>

        {/* Accept terms checkbox */}
        <label className="flex items-center gap-2 mt-4 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="checkbox checkbox-primary"
          />
          <span>I accept the rules and terms</span>
        </label>

        <button
          className={`btn bg-gradient-to-r from-purple-600 to-pink-500 text-white mt-4 ${
            !acceptedTerms ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleAddToCart}
          disabled={!acceptedTerms}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
