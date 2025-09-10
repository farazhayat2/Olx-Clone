import React from "react";
import {
  FaUserCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";

export default function Profile() {
  // Dummy user data (replace later with real data if needed)
  const userData = {
    username: "john_doe",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+92 300 1234567",
    address: "Karachi, Pakistan",
    joinedDate: "Jan 2024",
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      {/* 🔥 Animated Gradient Border */}
      <div className="relative w-full max-w-2xl p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 animate-gradient-x shadow-2xl">
        {/* Inner White Card */}
        <div className="bg-white rounded-2xl p-8">
          {/* Profile Header */}
          <div className="flex items-center gap-6 border-b pb-6 mb-6">
            <FaUserCircle className="text-purple-600 text-7xl drop-shadow-sm" />
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800">
                {userData.fullName}
              </h2>
              <p className="text-gray-500">@{userData.username}</p>
            </div>
          </div>

          {/* Info List */}
          <div className="space-y-4">
            <InfoRow icon={<FaEnvelope />} label="Email" value={userData.email} />
            <InfoRow icon={<FaPhone />} label="Phone" value={userData.phone} />
            <InfoRow
              icon={<FaMapMarkerAlt />}
              label="Address"
              value={userData.address}
            />
            <InfoRow
              icon={<FaRegCalendarAlt />}
              label="Joined On"
              value={userData.joinedDate}
            />
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-purple-600 transform hover:scale-105 transition duration-300 shadow-md">
              ✏️ Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 border rounded-lg p-4 hover:shadow-md hover:bg-gray-50 transition">
      <div className="text-purple-600 text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-gray-800 font-semibold">{value}</p>
      </div>
    </div>
  );
}
