import { useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/hackathon' element={ <Hackathon/> }/>
      <Route path='/coding' element={ <Coding/> }/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
