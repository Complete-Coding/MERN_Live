import React, { useRef, useState } from 'react'

const App = () => {

 console.log('Repaint....')
  const [currentSate, setState] = useState(0);
  const click = useRef(0)

  const handleUseSate = () =>{

    console.log('Use state clicked')
    setState(currentSate+1)
    console.log(currentSate)
  }

  const handleUseRef = () =>{
    console.log('Ref state clicked')

    click.current +=1;
    console.log(click.current)


  }
  return (
   <>
    <h1 className='text-3xl'>useState Vs refState</h1>
    <h2 className='text-xl'>UseState count:{currentSate}</h2>
    <h2 className='text-xl'>UseRef count:{click.current}</h2>
     <button className='text-1 bg-slate-500 rounded p-2' onClick={handleUseSate}>use</button>     
     <button className='text-1 bg-slate-500 rounded p-2' onClick={handleUseRef}>ref</button>
    </>
    
  )
}

export default App