import React, { useState } from 'react'
import Heading from './components/Heading';
import ToggleButton from './components/ToggleButton';
import ThemeContext from './store/ThemeContext';
 const App = () => {

  
  
  const [theme , setTheme] = useState('light')
  

  const ToggleTheme = () =>{

    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (

    
    
    
    <>
    <ThemeContext.Provider value={{theme: theme, ToggleTheme: ToggleTheme}}>
   <center><Heading /></center> 
   <ToggleButton />
   </ThemeContext.Provider>
    </>
  )
}

export default App;