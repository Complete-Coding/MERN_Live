import { useContext } from "react";
import TodoItemsUI from "./TodoItemUI";
import { TodoItemsContext } from "../store/TodoItemContext";

const AddTodoItmes = () => {
    const {todoItems} = useContext(TodoItemsContext);
   
    return (
        <>
            {todoItems.map((item) => <TodoItemsUI key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>)}
        </>
    )
}

export default AddTodoItmes;