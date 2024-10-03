import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import StateVsRef from "./components/StateVsRef";
import TestForm from "./components/TestForm";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <center>
      <AppName />
      <StateVsRef />
      
      {/* 
      <TestForm /><AddTodo />
      <TodoItems /> */}
    </center>
  );
}

export default App;
