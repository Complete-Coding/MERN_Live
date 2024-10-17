import { useRef, useState } from "react";

const Input = ({ addTodoItem }) => {
  const todoTextInput = useRef();
  const todoDateInput = useRef();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;

    if (todoText.trim() !== "" && todoDate.trim() !== "") {
      todoTextInput.current.value = '';
      todoDateInput.current.value = '';
      addTodoItem(todoText, todoDate);
      setIsButtonDisabled(true); // Reset button state
    } else {
      setIsButtonDisabled(false); // Disable button if inputs are empty
    }
  };

  return (
    <>
      <input
        type="text"
        className="bg-slate-200 px-4 py-2 mx-2 border-solid border-2 border-black"
        placeholder="Enter your work"
        ref={todoTextInput}
        required
        onChange={() => setIsButtonDisabled(todoTextInput.current.value.trim() === "")}
      />
      <input
        type="date"
        className="bg-slate-200 px-4 py-2 border-solid border-2 border-black"
        ref={todoDateInput}
        required
        onChange={() => setIsButtonDisabled(todoDateInput.current.value.trim() === "")}
      />
      <button
        className="bg-green-500 mx-2 px-4 py-2.5 font-bold rounded-sm"
        onClick={addHandler}
        disabled={isButtonDisabled}
      >
        Add
      </button>
    </>
  );
};

export default Input;