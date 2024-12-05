import { createContext, useReducer } from "react";
import ExampleReducer from "./ExampleReducer";

export const ExampleContext = createContext();

export const ExampleProvider = ({children}) => {

  const [exampleItems, dispatch] = useReducer(ExampleReducer, []);

  const addExampleItem = (id, exampleText) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id, exampleText
      }
    })
  }

  const deleteExampleItem = (id) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {
        id
      }
    })
  }

  const addAllExampleItems = (exampleItems) => {
    dispatch({
      type: 'LOAD_ALL_ITEMS',
      payload: {
        allItems: exampleItems
      }
    })
  }

  return <ExampleContext.Provider value={{exampleItems, addExampleItem, deleteExampleItem, addAllExampleItems}}>
    {children}
  </ExampleContext.Provider>
}