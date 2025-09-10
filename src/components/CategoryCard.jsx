import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ title, icon }) {
  const categorySlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      to={`/category/${categorySlug}`}
      className="flex flex-col items-center justify-center bg-white border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer p-4 h-28"
    >
      <div className="text-3xl text-blue-600 mb-2">{icon}</div>
      <h3 className="text-sm font-medium text-gray-700 text-center">{title}</h3>
    </Link>
  );
}
