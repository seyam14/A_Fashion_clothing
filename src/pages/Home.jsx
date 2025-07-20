import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleProducts = products.slice(0, visibleCount);
  const showMoreAvailable = visibleCount < products.length;

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Hero />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-6 text-center">
        Featured Products
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {showMoreAvailable ? (
          <button
            onClick={() => setVisibleCount(products.length)}
            className="btn btn-primary px-4 py-2 text-sm sm:text-base"
          >
            Show More
          </button>
        ) : (
          <Link
            to="/products"
            className="btn btn-outline btn-secondary px-4 py-2 text-sm sm:text-base"
          >
            View All Products
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
