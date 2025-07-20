import { motion } from "framer-motion";
import DiscountBadge from "./DiscountBadge";
import { Link } from "react-router-dom"; // Import Link for navigation

const ProductCard = ({ product }) => {

  const hasDiscount =
    product.discount &&
    product.discountEndsAt &&
    new Date(product.discountEndsAt) > new Date();

  const discountedPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div
      className="relative card bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 shadow-lg rounded-lg overflow-hidden
                  max-w-sm w-full mx-auto flex flex-col hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Discount Badge */}
      <DiscountBadge discount={product.discount} endsAt={product.discountEndsAt} />

      {/* Product Image */}
      <figure className="bg-white flex items-center justify-center p-4">
        <img
          src={product.img}
          alt={product.name}
          className="h-48 w-full object-contain"
          loading="lazy"
        />
      </figure>

      {/* Product Info */}
      <div className="card-body p-4 flex flex-col gap-3">
        <h2 className="card-title text-lg sm:text-xl md:text-2xl font-extrabold text-purple-700 text-center">
          {product.name}
        </h2>

        <motion.div
          className="text-lg font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {hasDiscount ? (
            <div className="flex justify-center items-center gap-2">
              <span className="line-through text-gray-400">
                BDT {product.price}
              </span>
              <span className="text-red-600">BDT {discountedPrice.toFixed(2)}</span>
              <span className="badge badge-success">{product.discount}% OFF</span>
            </div>
          ) : (
            <span className="text-indigo-600">BDT {product.price}</span>
          )}
        </motion.div>

        {/* Buttons Container */}
        <div className="card-actions justify-center gap-4 flex flex-wrap">
         

          {/* View Details Button */}
          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline text-purple-700 hover:bg-purple-100 hover:text-purple-900 font-semibold py-2 px-6 rounded shadow-md transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
