import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Hackathon from './pages/Hackathon/Hackathon';
import Coding from './assets/assets';
import Team from './pages/Team/Team';
import { Routes, Route } from 'react-router-dom';

function App() {
  const location = useLocation(); // Use location to track the current path

  // Function to determine the initial menu state based on the current path
  const getMenuName = (path) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/hackathon':
        return 'Hackathon';
      case '/coding':
        return 'Coding';
      case '/team':
        return 'Team';
      default:
        return 'Home';
    }
  };

  const [menu, setMenu] = useState(getMenuName(location.pathname)); // Initialize menu based on the path

  // Update menu state when the route changes
  useEffect(() => {
    setMenu(getMenuName(location.pathname));
    console.log(location.pathname)
  }, [location.path]);

  useEffect(() => {
    setMenu(getMenuName(location.pathname));
    console.log(location.pathname)
  }, []);

  return (
    <>
      <div className="app">
        <Navbar menu={menu} setMenu={setMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hackathon' element={<Hackathon />} />
          <Route path='/coding' element={<Coding />} />
          <Route path='/team' element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
