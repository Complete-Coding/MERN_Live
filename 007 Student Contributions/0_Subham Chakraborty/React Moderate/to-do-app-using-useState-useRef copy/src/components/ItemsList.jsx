
import Items from "./Items";
const ItemList = ({  todoItems,deleteItems}) =>{

 
  return (<>

<div className=" flex flex-col">
{todoItems.map((li) =>(

<Items key={li.id}  id={li.id} itemName={li.name} itemDate={li.date} deleteItems={deleteItems}/>


))}

</div>




  
  </>)
}

export default ItemList;