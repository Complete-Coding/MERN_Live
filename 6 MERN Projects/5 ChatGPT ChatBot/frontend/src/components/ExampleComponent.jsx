import { ExampleContext } from "../store/ExampleContext";
import { exampleServerToClientModel } from "../utils/ModelUtil";
import { useRef, useContext } from "react";

const ExampleComponent = () => {
  const { addExampleItem } = useContext(ExampleContext);
  const exampleTextInput = useRef();

  const addHandler = () => {
    fetch("http://localhost:3000/examples", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: exampleTextInput.current.value,
      }),
    })
      .then((res) => res.json())
      .then((serverItem) => {
        const { id, text } = exampleServerToClientModel(serverItem);
        addExampleItem(id, text);
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ref={exampleTextInput}
          placeholder="Enter text..."
        />
        <button
          onClick={addHandler}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ExampleComponent;
