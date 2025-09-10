import React, { useState } from "react";

const dummyChats = [
  { id: 1, name: "John Doe", lastMsg: "Is this still available?", time: "10:45 AM", messages: ["Hi!", "Is this still available?"] },
  { id: 2, name: "Sarah Ali", lastMsg: "Okay thanks!", time: "09:20 AM", messages: ["Hello", "Can you lower the price?", "Okay thanks!"] },
  { id: 3, name: "Mike Smith", lastMsg: "See you tomorrow", time: "Yesterday", messages: ["Hey", "See you tomorrow"] },
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(dummyChats[0]);

  return (
    <div className="h-screen flex bg-gray-100 p-4">
      {/* Chat List (Left side) */}

      <div className="w-1/3 bg-white border rounded-lg flex flex-col">
        <div className="p-4 font-semibold text-lg border-b">Chats</div>
        <div className="flex-1 overflow-y-auto">
          {dummyChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition ${
                selectedChat.id === chat.id ? "bg-gray-200" : ""
              }`}
            >
              <div className="overflow-hidden">
                <p className="font-medium text-gray-800">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">{chat.lastMsg}</p>
              </div>
              <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                {chat.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Box (Right side) */}
      <div className="w-2/3 flex flex-col ml-4 bg-white rounded-lg border">
        <div className="p-4 border-b font-semibold text-gray-800">
          {selectedChat.name}
        </div>

        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {selectedChat.messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-3 p-3 rounded-xl max-w-xs shadow-sm ${
                i % 2 === 0
                  ? "bg-gray-200 text-gray-800 self-start"
                  : "bg-blue-500 text-white self-end ml-auto"
              }`}
            >
              {msg}
            </div>
          ))}
        </div>

        <div className="p-3 border-t bg-white flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="ml-3 px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
