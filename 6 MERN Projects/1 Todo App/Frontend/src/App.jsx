import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import LoadItems from "./components/LoadItems";
import TodoItems from "./components/TodoItems";
import { TodoItemsProvider } from "./store/TodoItemsContext";

function App() {
  return (
    <TodoItemsProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <AppName />
          <AddTodo />
          <LoadItems />
          <TodoItems />
        </div>
      </div>
    </TodoItemsProvider>
  );
}

export default App;
