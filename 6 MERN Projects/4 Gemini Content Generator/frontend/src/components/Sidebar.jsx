import { useContext } from "react";
import { ChatContext } from "../store/ChatContext";
import formatTime from "../util/timeUtil";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { chats, deleteChat } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleNewChat = () => {
    navigate("/");
  }

  const handleDeleteChat = (id) => {
    fetch(`http://localhost:3000/api/conversation/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      deleteChat(id);
    });
  }

  return (
    <div className="w-64 bg-white h-full p-4 border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">Talk to AI</h1>
        </div>
        
        <button 
          onClick={handleNewChat}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mb-6 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          New Chat
        </button>

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div key={chat._id} className="group relative mb-2">
              <Link 
                to={`/conversation/${chat._id}`}
                className="block p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-gray-800 truncate">{chat.title}</div>
                <div className="text-sm text-gray-500">{formatTime(chat.startTime)}</div>
              </Link>
              <button 
                onClick={() => handleDeleteChat(chat._id)}
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-200 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar