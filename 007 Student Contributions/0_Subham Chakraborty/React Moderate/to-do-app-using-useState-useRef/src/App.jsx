import React, { useState } from 'react'
import Heading from './components/Heading';
import Input from './components/Input';
import ItemList from './components/ItemsList';
import Data from './data/Data';
const App = () => {

  
  const [todoItems, setTodoItems] = useState(Data)

  const addTodoItem = (todoText, todoDate) =>{

    setTodoItems(currentItems =>{
      return [...currentItems,{id : todoText, name:todoText, date: todoDate }]
    })
  }

  const deleteItems = (todoId) =>{

    setTodoItems(currentItems =>{
      return currentItems.filter(item => item.id !== todoId)
    })
  }
  return (
   <>
   <div className='bg-slate-400 p-2'>
   <Heading />
   <Input addTodoItem={addTodoItem} />
   <ItemList todoItems={todoItems} deleteItems={deleteItems} />
   
   </div>
   </>
  )
}

export default App;