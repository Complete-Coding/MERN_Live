import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../models";


interface TodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const ToDoItems: React.FC<TodosProps> = ({todos, setTodos}): JSX.Element => {
  return (
    <section className="todoItems">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo.todo} isDone={todo.isDone} setTodos={setTodos}/>
      ))}
    </section>
  );
};

export default ToDoItems;
