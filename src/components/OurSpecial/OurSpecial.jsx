import React from 'react'
import Title from '../Title/Title'
import { DateAcademics } from '../Date/DateAcademics'
import CardBenfits from '../CardBenfits/CardBenfits'

function OurSpecial() {
  return (
    <section className='padding margin'>
        <Title
         padd = 'padm'
        Ptitle = "Our Features"
        H2title = "Our Special Features"
        P2title = "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"/>
        <div className='cardsBenfits'>
            {DateAcademics.map((item , index) => (
                 <CardBenfits
                 key={index}
                 ClassBen="allSec"
                 image = {item.image}
                 title={item.title}
                 pargraph={item.pargraph}
                 />
            ))}
        </div>
    </section>
  )
}

export default OurSpecial
