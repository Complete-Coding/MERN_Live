import React, { useRef } from "react";
import { Todo } from "../models";

interface propsType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoInput: React.FC<propsType> = ({todos, setTodos }): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);


  const handleOnSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value.length != 0) {
      setTodos([...todos, { id: Date.now(), todo: inputRef.current.value, isDone: false }]);
      // Clear the item from input
      inputRef.current.value = "";
      inputRef.current.blur();
    }

  };

  return (
    <form className="inputForm" onSubmit={handleOnSubmit}>
      <input
        className="inputField"
        type="text"
        ref={inputRef}
        placeholder="Enter A Task"
      />
      <button className="submitButton" type="submit">
        Go
      </button>
    </form>
  );
};

export default TodoInput;
