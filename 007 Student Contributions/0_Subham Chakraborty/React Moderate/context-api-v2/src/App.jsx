import React, { useState } from 'react'
import Heading from './components/Heading';
import ToggleButton from './components/ToggleButton';
import ThemeContext, { ThemeProvider } from './store/ThemeContext';
 const App = () => {


  return (

    
    
    
    <>
   <ThemeProvider>
   <center><Heading /></center> 
   <ToggleButton />
   </ThemeProvider>
   
    </>
  )
}

export default App;