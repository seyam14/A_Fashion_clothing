import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, Moon, Sun, X } from "lucide-react";
import { useCart } from "./CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const [animateCart, setAnimateCart] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.documentElement;
    darkMode
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartItems]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${search}`);
      setSearch("");
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-wide">
            A <span className="text-yellow-300">Fashion</span>
          </Link>

          {/* Search Input (Desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-8">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-sm w-full max-w-xs text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/products" className="hover:text-yellow-300 font-medium">Products</Link>

            {/* Animated Cart Icon */}
            <motion.div
              animate={animateCart ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/cart" className="relative flex items-center hover:text-yellow-300 font-medium">
                <ShoppingCart className="w-5 h-5" />
                <span className="ml-2 hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="badge badge-sm absolute -top-2 -right-3 bg-yellow-400 text-black">
                    {totalItems}
                  </span>
                )}
              </Link>
            </motion.div>

            <button onClick={() => setDarkMode(!darkMode)} className="hover:text-yellow-300">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className="hover:text-yellow-300">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setDrawerOpen(true)} className="hover:text-yellow-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-indigo-700 text-white z-50 shadow-lg p-6 space-y-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setDrawerOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="input input-sm w-full text-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <Link to="/" onClick={() => setDrawerOpen(false)} className="block text-lg hover:text-yellow-300">
              Home
            </Link>
            <Link to="/products" onClick={() => setDrawerOpen(false)} className="block text-lg hover:text-yellow-300">
              Products
            </Link>
            <Link to="/cart" onClick={() => setDrawerOpen(false)} className="block text-lg hover:text-yellow-300 relative">
              Cart
              {totalItems > 0 && (
                <span className="badge badge-sm ml-2 bg-yellow-400 text-black">{totalItems}</span>
              )}
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
