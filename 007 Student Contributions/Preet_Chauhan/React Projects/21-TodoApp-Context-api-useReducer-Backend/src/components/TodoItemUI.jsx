import { useContext } from 'react';
import '../App.css'
import TodoButtons from './TodoButtons';
import { TodoItemsContext } from '../store/TodoItemContext';



    
const TodoItemsUI = ({id,todoText,todoDate}) => {
    const {deleteTodoItem} = useContext(TodoItemsContext);

    const deleteHandler = () => {
        fetch(`http://localhost:3000/todos/ ${id}`, {
           
            method: 'DELETE',
             
        })
        .then(res => res.json())
        .then(data => {
            deleteTodoItem(data.id);
        })
        .catch(err => { 
            console.log(err);
        })
    }
   
   
    return (
        <>
            <div className="TodoItems">
                <div className="hstack gap-3">
                    <div className=" padding form-control me-auto ">
                       {todoText}
                    </div>
                    <div className=" padding form-control me-auto ">
                        {todoDate}
                    </div>
                    <div className="vr"></div>
                    <TodoButtons type={'danger'} btnText={'Delete'} handler={deleteHandler}/>
                </div>
            </div>
        </>
    );
}
export default TodoItemsUI;