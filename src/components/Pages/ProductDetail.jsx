import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); // ✅ only id is needed (DummyJSON has unique IDs)
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch product from DummyJSON API
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct({
          ...data,
          location: ["Karachi", "Lahore", "Islamabad"][
            Math.floor(Math.random() * 3)
          ], // fake location
          postedBy: "Haider",
          memberSince: "2021",
          activeAds: Math.floor(Math.random() * 5) + 1,
          postedTime: "2 days ago",
          condition: "Used",
        });
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 flex justify-center items-center text-lg text-gray-600">
        ⏳ Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 flex justify-center items-center text-lg text-red-600">
        ❌ Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side → Image */}
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Right Side → Seller Info */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-gray-700 mb-1">
              Posted by {product.postedBy}
            </h3>
            <p className="text-sm text-gray-500">
              Member Since {product.memberSince}
            </p>
            <p className="text-sm text-gray-500">
              Active Ads: {product.activeAds}
            </p>

            <button className="mt-4 w-full py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition">
              📞 Show Phone Number
            </button>
            <button
              className="mt-2 w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              onClick={() => navigate("/chat")}
            >
              💬 Chat with Seller
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section → Product Details */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800">Rs {product.price}</h2>
        <p className="text-lg text-gray-700 mt-1">{product.title}</p>
        <p className="text-sm text-gray-500 mt-1">
          📍 {product.location} · {product.postedTime}
        </p>

        {/* Details Table */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Details</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
            <p>
              <span className="font-medium">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-medium">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-medium">Condition:</span> {product.condition}
            </p>
            <p>
              <span className="font-medium">Stock:</span> {product.stock}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
