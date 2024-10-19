

let Container = (props) =>{

  return (<>
  
  <div className="  m-5 p-2 border-double border-4 border-black-500 bg-blue-400 rounded-2xl flex ">
   {props.children}
  </div>
  </>)
}


export default Container;