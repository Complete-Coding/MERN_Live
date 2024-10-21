//                  <<<   TODO APP WITH CONTEXT API USEREDUCER HOOK AND BACKEND   >>>
import './App.css';
import AddTodo from './components/AddTodo';
import AddTodoItmes from './components/AddTodoItems';
import LoadItems from './components/LoadItems';
import { TodoItemsProvider } from './store/TodoItemContext';

function App() {

 
  return (
    <>
    <TodoItemsProvider> 
      <center>
        <p className="Appname"> TODO APP </p>
      </center>
      <AddTodo />  
      <LoadItems /> 
      <AddTodoItmes  /> 
      </TodoItemsProvider>
    </>
  )
}

export default App;
  