import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";


let ToggleButton = () =>{

  const {theme, ToggleTheme}= useContext(ThemeContext)

  

  return(<>
  
  <button className={`p-2 border-2 border-black mt-2 rounded ${theme === 'light' ? " bg-slate-200 text-black" : "bg-black text-white"}
  `} onClick={ToggleTheme}>click  me</button>
  </>)
}

export default ToggleButton;