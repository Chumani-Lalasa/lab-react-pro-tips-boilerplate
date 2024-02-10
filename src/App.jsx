import { useState } from 'react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'
import Form from './Form/Form'

function App() {

  return (
    <>
    <div>
    <Navbar />
      <AllRoutes />
    </div>
    
    </>
  )
}

export default App
