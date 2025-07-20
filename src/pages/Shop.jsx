import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";
import { motion } from "framer-motion";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([500, 30000]); // [min, max]

  const itemsPerPage = 8;
  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const prices = productsData.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  useEffect(() => {
    let temp = [...productsData];

    if (search.trim()) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      temp = temp.filter((p) => p.category === category);
    }

    temp = temp.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortOrder === "asc") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(temp);
    setCurrentPage(1);
  }, [search, category, sortOrder, priceRange]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-10 bg-base-100">
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="select select-bordered w-full md:w-1/4"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Price Range Slider */}
      <div className="mb-6 flex flex-col md:flex-row items-center gap-4 md:space-x-4">
        <label className="text-sm font-medium whitespace-nowrap">
          Price: BDT {priceRange[0]} - BDT {priceRange[1]}
        </label>

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[1]}
          className="range range-primary w-full md:w-1/2 min-w-[150px]"
          onChange={(e) =>
            setPriceRange([priceRange[0], Math.min(parseInt(e.target.value), priceRange[1])])
          }
        />

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[0]}
          className="range range-secondary w-full md:w-1/2 min-w-[150px]"
          onChange={(e) =>
            setPriceRange([Math.min(parseInt(e.target.value), priceRange[1]), priceRange[1]])
          }
        />
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {currentItems.length > 0 ? (
          currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setCurrentPage(idx + 1)}
              className={`btn btn-sm ${
                currentPage === idx + 1 ? "btn-primary" : "btn-outline"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
