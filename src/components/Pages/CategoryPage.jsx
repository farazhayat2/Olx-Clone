import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryProducts() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Error fetching category products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCategoryProducts();
  }, [category]);

  // ✅ Filter by price
  const filteredProducts = products.filter((p) => {
    return maxPrice === "" || p.price <= parseInt(maxPrice);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex gap-6">
      {/* Left Side → Filters */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow h-fit">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Price
          </label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Enter max price"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-sm"
          />
        </div>

        <div>
          <h3 className="font-medium text-sm text-gray-600 mb-2">Categories</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link to="/category/smartphones" className="hover:text-blue-600">Mobiles</Link></li>
            <li><Link to="/category/laptops" className="hover:text-blue-600">Laptops</Link></li>
            <li><Link to="/category/fragrances" className="hover:text-blue-600">Beauty</Link></li>
            <li><Link to="/category/furniture" className="hover:text-blue-600">Furniture</Link></li>
            <li><Link to="/category/groceries" className="hover:text-blue-600">Groceries</Link></li>
          </ul>
        </div>
      </div>

      {/* Right Side → Products */}
      <div className="w-3/4">
        <h1 className="text-2xl font-bold capitalize mb-6">{category.replace("-", " ")}</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${encodeURIComponent(category)}/${product.id}`}
                className="group bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-md font-semibold text-gray-800 group-hover:text-black">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-3 font-bold text-blue-600">${product.price}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
