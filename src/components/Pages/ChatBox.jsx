// import React, { useState } from "react";
// import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

// export default function Chatbox() {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi, is this still available?", sender: "buyer" },
//     { id: 2, text: "Yes! It's available ✅", sender: "seller" },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const newMsg = { id: Date.now(), text: input, sender: "buyer" };
//     setMessages([...messages, newMsg]);
//     setInput("");
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg flex flex-col h-[500px]">
//         {/* Header */}
//         <div className="flex items-center gap-3 border-b p-4 bg-gray-50">
//           <FaUserCircle className="text-gray-500 text-3xl" />
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800">Seller</h2>
//             <p className="text-xs text-green-500">Online</p>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-3">
//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`flex ${
//                 msg.sender === "buyer" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`px-4 py-2 rounded-lg max-w-xs text-sm ${
//                   msg.sender === "buyer"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Input */}
//         <form
//           onSubmit={sendMessage}
//           className="flex items-center gap-2 border-t p-3 bg-gray-50"
//         >
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
//           >
//             <FaPaperPlane />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
