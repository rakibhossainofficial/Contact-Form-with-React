import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/ContactHeader/ContactHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <ContactHeader />
    </>
  )
}

export default App
