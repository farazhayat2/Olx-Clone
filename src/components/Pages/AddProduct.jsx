import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.image || !formData.price) {
      alert("⚠ Please fill all required fields");
      return;
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = { id: Date.now(), ...formData };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    alert(" Product added successfully!");
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 pt-24 pb-12">
      <div className="relative w-full max-w-2xl p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 animate-gradient-x shadow-2xl">
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center tracking-wide">
            📦 Post Your Ad
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              type="text"
              name="title"
              placeholder="Product Title"
              value={formData.title}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 h-28 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <InputField
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transform hover:scale-105 transition duration-300 shadow-md"
            >
              🚀 Post Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    />
  );
}
