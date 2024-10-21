import { createContext, useReducer } from "react";

const todoReducer = (currentState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const {id, todoText, todoDate} = action.payload;
      return [...currentState, { id, todoText, todoDate }]
    }

    case 'DELETE_TODO':
      return currentState.filter(item => item.id !== action.payload.ids);
   
    case 'LOAD_ALL_ITEMS':
      return action.payload.addAllItem;
    default:
      return currentState;

  }
}

export const TodoItemsContext = createContext();

export const TodoItemsProvider = ({ children }) => {
  const [todoItems, todoDispatch] = useReducer(todoReducer, []);

  const addTodo = (id,todoText, todoDate) => {

    todoDispatch(
      {
        type: 'ADD_TODO',
        payload: {
          id,
          todoText,
          todoDate,
        }
      });
  }

  const deleteTodoItem = (ids) => {
    todoDispatch(
      {
        type: 'DELETE_TODO',
        payload: { ids }
      }
    )
    console.log(`Detele todo with id: ${ids}`)
  }

  const addAllItems = (todoItems) => {
    todoDispatch(
      {
        type: 'LOAD_ALL_ITEMS',
        payload: {
          addAllItem: todoItems,

        }
      }
    )
  }


  return <TodoItemsContext.Provider
    value={
      {
        addTodo,
        todoItems,
        deleteTodoItem,
        addAllItems,
      }


    }
  >
    {children}
  </TodoItemsContext.Provider >
}