import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactFrom from './Components/ContactForm/ContactFrom'

function App() {

  return (
    <>
      <Navigation />
      <main className='main_container'> 
        <ContactHeader />
        <ContactFrom />
      </main>
    </>
  )
}

export default App
