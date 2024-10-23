import '../App.css'
import { TodoItemsContext } from '../store/TodoItemContext';
import todoItemClientModel from '../utils/ModelUtils';
import TodoButtons from './TodoButtons'
import { useContext, useRef } from 'react';

function AddTodo({ }) {
    const { addTodo } = useContext(TodoItemsContext);
    const todoTextInput = useRef();
    const todoDateInput = useRef();

    const addHandler = () => {
        console.log(`Trying to Add Todo ${todoTextInput.current.value} with date ${todoDateInput.current.value} `);
        const todoText = todoTextInput.current.value;
        const todoDate = todoDateInput.current.value;
        todoTextInput.current.value = "";
        todoDateInput.current.value = "";
        fetch('http://localhost:3000/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task: todoText, 
                date: todoDate,
            })
        })
        

        .then(res => res.json())
        .then(serverItems => {   
            const {id,todoText,todoDate} = todoItemClientModel(serverItems);
            addTodo(id,todoText, todoDate);
     })
     
    }

    // const textChangeHandler = (event) => {
    //     console.log(event.target.value )
    // }

    return (
        <>
            <div className="AddTodo">
                <div className="hstack gap-3">
                    <input
                        type="text"
                        className="form-control me-auto"
                        ref={todoTextInput}
                        placeholder="Add your task here..." />
                    <input
                        type="date"
                        ref={todoDateInput}
                        className="form-control me-auto" />

                    <div className="vr"></div>
                    <TodoButtons type={'success'} btnText={'ADD'} handler={addHandler} />
                </div>
            </div>
        </>
    );
}
export default AddTodo;   