import './Navigate.css'
import Title from '../Title/Title'
import { DateNavigate } from '../Date/DateNavigate'
import CardNavigate from '../CardNavigate/CardNavigate'

export default function Navigate() {
  return (
    <section className='padding margin' id='Student'>
        <Title
        Ptitle= "Explore More"
        H2title ="Navigate through our Pages"
        P2title = "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        />
        <div className='allCardNavigation'>
        {
          DateNavigate.map((item , index) => (
            <CardNavigate
            key={index}
            title = {item.title}
            text = {item.text}
            btn = {item.btn}
            />
          ))
        }
      
        </div>
    </section>
  )
}
