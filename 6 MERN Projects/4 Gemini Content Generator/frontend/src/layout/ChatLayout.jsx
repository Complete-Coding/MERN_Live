import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ChatLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default ChatLayout;