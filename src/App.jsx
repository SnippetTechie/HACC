import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Hackathon from './pages/Hackathon/Hackathon'
import Coding from './assets/assets'
import Team from './pages/Team/Team'
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/hackathon' element={<Hackathon/>}/>
      <Route path='/coding' element={<Coding/>}/>
      <Route path='/team' element={<Team/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
