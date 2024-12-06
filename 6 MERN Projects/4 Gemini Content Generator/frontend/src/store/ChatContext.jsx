import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({children}) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/conversation", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((chats) => {
      setChats(chats);
      console.log(chats);
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  const addChat = (chat) => {
    console.log([...chats, chat]);
    setChats([...chats, chat]);
  }

  const deleteChat = (id) => {
    setChats(chats.filter((chat) => chat._id !== id));
  }

  const updateChat = (updatedChat) => {
    setChats(chats.map((chat) => chat._id === updatedChat._id ? updatedChat : chat));
  }

  return (
    <ChatContext.Provider value={{chats, addChat, deleteChat, updateChat}}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-red-500">Error: {error.message}</div>
        </div>
      ) : (
        children
      )}
    </ChatContext.Provider>
  )
}