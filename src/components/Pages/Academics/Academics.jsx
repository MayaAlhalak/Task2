import './Academics.css'
import HeroAbout from '../../HeroAbout/HeroAbout'
import OurSpecial from '../../OurSpecial/OurSpecial'
import Students from '../../Students/Students'
import OurRooms from '../../OurRooms/OurRooms'

function Academics() {
  return (
    <section>
      <HeroAbout
      btn = "Academics"
      title = "Nurturing Young Minds for Success"
      text= "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."/>
      <OurSpecial/>
      <Students/>
      <OurRooms/>
    </section>
  )
}

export default Academics
