import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ role }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/home" className="text-xl font-bold text-black-300">
          🚚 Khareedo
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/chat" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Chat
          </Link>

          <Link to="/profile" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Profile
          </Link>

          <Link to="/auth" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Login / Register
          </Link>

          <Link to="/addproduct" className="text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md">
            Sell
          </Link>

          {role === "admin" && (
            <Link to="/admin" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              Admin
            </Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="text-2xl text-gray-700 p-1"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu (full width under navbar) */}
      <div className={`md:hidden w-full bg-white shadow-sm transition-max-h duration-200 overflow-hidden ${menuOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="px-6 py-3 flex flex-col gap-2">
          <Link to="/chat" className="text-gray-700 px-3 py-2 rounded-md">Chat</Link>
          <Link to="/auth" className="text-gray-700 px-3 py-2 rounded-md">Login / Register</Link>
          <Link to="/profile" className="text-gray-700 px-3 py-2 rounded-md">Sell</Link>
          {role === "admin" && <Link to="/admin" className="text-gray-700 px-3 py-2 rounded-md">Admin</Link>}
        </div>
      </div>
    </header>
  );
}
