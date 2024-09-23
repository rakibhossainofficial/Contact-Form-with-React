import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactFrom from './Components/ContactForm/ContactFrom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <ContactHeader />
      <ContactFrom />
    </>
  )
}

export default App
