import React from 'react'
import { BrowserRouter , Router , Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Team from './pages/Team'
import { useParams } from'react-router-dom';
import Gallery from './pages/Gallery'
import SplashScreen from './pages/SplashScreen'
import About from './pages/About'
import Update3 from './pages/Update3'
import { ParallaxProvider } from 'react-scroll-parallax'
const App = () => {
  const { id } = useParams();
  localStorage.setItem("id", id);
  return (

   <ParallaxProvider>
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen  />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/update" element={<Update3/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />

        
      </Routes>
  
    
    
    </BrowserRouter>
    </ParallaxProvider>

  )
}

export default App
