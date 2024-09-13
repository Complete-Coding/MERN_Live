import React, { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import { Todo } from "./models";
import ToDoItems from "./components/TodoItems";

const App: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="appContainer">
      <AppName />
      <TodoInput
        todos={todos}
        setTodos={setTodos}
      />
      <ToDoItems todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
