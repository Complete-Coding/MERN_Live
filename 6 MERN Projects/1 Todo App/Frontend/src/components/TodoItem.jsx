import { TodoItemsContext } from "../store/TodoItemsContext";
import { todoItemToClientModel } from "../utils/ModelUtil";
import Button from "./Button";
import {useContext} from "react";

const TodoItem = ({ id, todoText, todoDate }) => {

  const {deleteTodoItem} = useContext(TodoItemsContext);

  const formattedDate = new Date(todoDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const deleteHandler = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(deletedItem => {
      const clientDeletedItem = todoItemToClientModel(deletedItem);
      deleteTodoItem(clientDeletedItem.id);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{todoText}</div>
        <div className="col-3">{formattedDate}</div>
        <div className="col-2">
          <Button btnType="danger" btnText="Delete" handler={deleteHandler} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
