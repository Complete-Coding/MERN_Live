import React, { useContext, useEffect, useState } from 'react'
import { TodoItemsContext } from '../store/TodoItemContext' 
import todoItemClientModel from '../utils/ModelUtils';
// import TodoButtons from './TodoButtons';

const LoadItems = () => {
    const { todoItems,addAllItems} = useContext(TodoItemsContext);
    const[isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); 
        fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(items => {
            const newItems = items.map(todoItemClientModel);
            addAllItems(newItems);
        })
         
          .finally(() => {
            setLoading(false);
          })
          console.log('Load Items ');

    },[])  

   

    return (  
        <> 
            <center>
                {isLoading &&<h2 className='pb-3 font-bold'> Loading.........   </h2>}
               { console.log(isLoading)}
               { console.log(!isLoading)}
                 
                {!isLoading && todoItems.length === 0 && <p className='pb-3 font-bold'>Enjoy Your DAY </p>}
                           
               

            </center>

        </>
    ) 
}

export default LoadItems; 