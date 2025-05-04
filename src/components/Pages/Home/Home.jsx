import React from 'react'
import Hero from '../../Hero/Hero'
import OurBenefits from '../../OurBenefits/OurBenefits'
import OurTestimonial from '../../OurTestimonials/OurTestimonials'
import Frequently from '../../Frequently/Frequently'
import Navigate from '../../Navigate/Navigate'

function Home() {
  return (
    <>
      <Hero
      herotext ="Welcome to Little Learners Academy"
      herotext2 ="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"/>
      <OurBenefits/>
      <OurTestimonial/>
      <Frequently/>
      <Navigate/>
    </>
  )
}

export default Home
