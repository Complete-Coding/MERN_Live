import './App.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import {DangerButton, SuccessButton} from './components/Buttons'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'

function App() {
  return (
    <>
      <Heading />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <StudentList />
      <Paragraph />
      <DangerButton />
      <SuccessButton />
      <DynamicComponent />
      <StudentList />
    </>
  )
}

export default App
