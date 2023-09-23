import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './practice/Count'
import Prop from './practice/Prop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Prop name="Arun"/>
     <Count/>
    </>
  )
}

export default App
