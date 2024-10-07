let App = () =>{



  
const textChangeHandler =(event) =>{

  console.log(event.target.value);

  
}


const clickButton = (event) =>{

  console.log(event.target.value, event);
}

  return (<>
  
  <h1 className="text-4xl text-pink-400">Handling Events</h1>

  <label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-2 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"  onChange={textChangeHandler}/>


  <button class="bg-sky-500 hover:bg-sky-700 rounded-xl p-4 text-white font-bold" onClick={clickButton} value="Sunday">
  Save changes
</button>
</label>
  
  
  
  
  
  
  </>)
}

export default App;