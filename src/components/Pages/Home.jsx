import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../CategoryCard";
import bannerImg from "../../assets/565868639-800x600.webp";
import {
  FaCar,
  FaMobileAlt,
  FaTv,
  FaTshirt,
  FaLaptop,
  FaBriefcase,
} from "react-icons/fa";
import Footer from "../footer";

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState({});

  // ✅ Fetch products from your backend (MongoDB)
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('http://localhost:3001/user/product'); 
        const data = await res.json();

        // Group products by category
        const grouped = data.reduce((acc, product) => {
          const cat = product.category?.toLowerCase().replace(/\s+/g, "-") || "other";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push({
            id: product._id, // MongoDB _id
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image || "https://via.placeholder.com/300", // fallback
            location: product.location || ["Karachi", "Lahore", "Islamabad"][
              Math.floor(Math.random() * 3)
            ], 
          });
          return acc;
        }, {});

        setCategories(grouped);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      }
    }

    fetchProducts();
  }, []);

  // ✅ Filter search + location
  const filterProducts = (products) =>
    products.filter((p) => {
      const matchesSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesLocation =
        location.trim() === "" ||
        p.location.toLowerCase() === location.toLowerCase();
      return matchesSearch && matchesLocation;
    });

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* 🔎 Search + Location Filter */}
      <div className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-3">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full md:w-1/4 bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
          >
            <option value="">All Locations</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
          </select>

          <div className="flex items-center w-full md:flex-1 bg-gray-100 border border-gray-300 rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Find cars, mobiles, clothes and more..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 w-full bg-gray-100 focus:outline-none text-sm"
            />
            <button className="flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-2 text-sm font-medium transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* 🖼️ Banner */}
      <div className="w-lg mx-auto px-6 mt-6">
        <div className="w-full rounded-lg overflow-hidden shadow">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full h-40 md:h-64 object-cover"
          />
        </div>
      </div>

      {/* 📦 Category Cards */}
      <div className="max-w-screen-lg mx-auto px-2 pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
          <CategoryCard title="Smartphones" icon={<FaMobileAlt />} />
          <CategoryCard title="Laptops" icon={<FaLaptop />} />
          <CategoryCard title="Fragrances" icon={<FaTshirt />} />
          <CategoryCard title="Skincare" icon={<FaTshirt />} />
          <CategoryCard title="Groceries" icon={<FaTshirt />} />
          <CategoryCard title="Home Decoration" icon={<FaTshirt />} />
          <CategoryCard title="Furniture" icon={<FaTshirt />} />
          <CategoryCard title="Mens Shirts" icon={<FaTshirt />} />
          <CategoryCard title="Mens Shoes" icon={<FaTshirt />} />
          <CategoryCard title="Womens Dresses" icon={<FaTshirt />} />
        </div>
      </div>

      {/* 🛒 Products Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {Object.keys(categories).map((catKey) => {
          const filteredProducts = filterProducts(categories[catKey]);
          return (
            <div key={catKey} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
                {catKey.replace("-", " ")}
              </h2>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  No {catKey.replace("-", " ")} found for your search.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${encodeURIComponent(catKey)}/${product.id}`}
                      className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="relative w-full h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-md font-semibold text-gray-800 group-hover:text-black">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-grow">
                          {product.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 font-bold px-3 py-1 rounded-lg shadow-sm">
                            ${product.price}
                          </span>
                          <span className="text-xs text-gray-500">
                            📍 {product.location}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
