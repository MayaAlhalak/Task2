
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Academics from './components/Pages/Academics/Academics'



function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
       <Route path='/Academics' element={<Academics/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
