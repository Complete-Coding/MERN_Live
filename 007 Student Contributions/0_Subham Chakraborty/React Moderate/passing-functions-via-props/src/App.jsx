



let App =() =>{


  const clickHandler = (event) =>{

    console.log(event.target.value, event);
  }
  
  return(<>
  
  
  <h1>Hello world</h1>

  <button class="bg-sky-500 hover:bg-sky-700 rounded-xl p-4 text-white font-bold" onClick={clickHandler} value="Sunday">
  Save changes
</button>
  
  </>)
}

export default App;