import CardBenfits from '../CardBenfits/CardBenfits'
import { DateBenfits } from '../Date/DateBenfits'
import Title from '../Title/Title'
import './OurBenefits.css'

function OurBenefits() {
  return (
    <section className='padding margin' id='about'>
      <div>
        <Title 
        Ptitle = "Children Deserve Bright Future"
        H2title= "Our Benefits"
        P2title= "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."/>
      </div>
      <div className="cardsBenfits">
        {
          DateBenfits.map((item , index) =>(
            <CardBenfits
            key={index}
            image = {item.image}
            title={item.title}
            pargraph={item.pargraph}
            />
          ) )
        }
      </div>
    </section>
  )
}

export default OurBenefits
