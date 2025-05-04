import React from 'react'
import HeroAbout from '../../HeroAbout/HeroAbout'
import OurMission from '../../OurMission/OurMission'
import OurTeam from '../../OurTeam/OurTeam'
import OurHistory from '../../OurHistory/OurHistory'
import OurAwards from '../../OurAwards/OurAwards'

const About = () => {
  return (
    <>
    <HeroAbout
    btn ="Overview"
    title ="Welcome to Little Learners Academy"
    text= "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."/>
      <OurMission/>
      <OurAwards/>
      <OurHistory/>
      <OurTeam/>
     
    </>
  )
}

export default About
