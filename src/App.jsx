
import './App.css'
import Footer from './components/Footer/Footer'
import Frequently from './components/Frequently/Frequently'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Navigate from './components/Navigate/Navigate'
import OurBenefits from './components/OurBenefits/OurBenefits'
import OurTestimonials from './components/OurTestimonials/OurTestimonials.JSX'
function App() {


  return (
    <>
      <NavBar/>
      <Hero
      herotext = "Welcome to Little Learners Academy"
      herotext2 ="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"/>
      <OurBenefits/>
      <OurTestimonials/>
      <Frequently/>
      <Navigate/>
      <Footer/>
    </>
  )
}

export default App
