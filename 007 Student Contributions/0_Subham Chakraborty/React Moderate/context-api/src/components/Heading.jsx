
import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";
let Heading = () =>{

  const {theme} = useContext(ThemeContext)

  console.log(theme)
  return (<>
  <div className={`border-solid border-2 border-black  font-bold text-3xl ${theme === 'light' ? "text-black  bg-white " : "text-white bg-black"} `}>
Welcome to context API

  </div>
  
  </>)
}

export default Heading;