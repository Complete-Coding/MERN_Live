
import { createContext } from 'react';

import { useState } from 'react';

const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{




const [theme , setTheme] = useState('light')
  

  const ToggleTheme = () =>{

    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
  }

  const contextVal = {theme: theme, ToggleTheme: ToggleTheme}

  return (<> <ThemeContext.Provider value={contextVal}>

    {children}
</ThemeContext.Provider>  
  </>)

}

export default ThemeContext;