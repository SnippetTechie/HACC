import { useState } from 'react'
import Hackathon from './pages/Hackathon/Hackathon'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
    <Navbar/>
    <Hackathon/>
    <Footer/>
    </div>
    </>
  )
}

export default App
