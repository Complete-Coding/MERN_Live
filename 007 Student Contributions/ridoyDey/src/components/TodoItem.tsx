import { MdEdit, MdDeleteForever, MdOutlineCheck } from "react-icons/md";
import { Todo } from "../models";
import { useState } from "react";

interface TodoItemProps {
  id: number;
  todo: string;
  isDone: boolean;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  todo,
  isDone,
  setTodos,
}): JSX.Element => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(todo);

  const handleDelete = (): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  const handleCompleted = (): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (): void => {
    if(isEditable){
      setEditValue();
    }

    setIsEditable(!isEditable);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    console.log(e);
    e.preventDefault();

    if (inputValue.trim()) {
      setEditValue();
    } else {
      alert("Todo cannot be empty!");
    }

    setIsEditable(!isEditable);
  };

  const setEditValue = (): void =>{
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: inputValue } : todo
      )
    );
  }

  return (
    <form className="todoItem" onSubmit={handleSubmit}>
      {isEditable ? (
        <input
          className="editableInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
      ) : !isDone ? (
        <h4 className="todoName">{todo}</h4>
      ) : (
        <s className="todoName">{todo}</s>
      )}

      <div className="iconContainer">
        <span className="icon">
          <MdEdit fill="blue" onClick={handleEdit} />
        </span>
        <span className="icon" onClick={handleDelete}>
          <MdDeleteForever fill="red" />
        </span>
        <span className="icon">
          <MdOutlineCheck fill="darkGreen" onClick={handleCompleted} />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
