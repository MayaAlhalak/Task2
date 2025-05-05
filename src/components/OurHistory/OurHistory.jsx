import CardHistory from '../CardHistory/CardHistory'
import Title from '../Title/Title'
import './OurHistory.css'

function OurHistory() {
  return (
    <section className='padding margin'>
      <Title
      padd = 'padm'
      Ptitle = "Our Progressive Journey"
      H2title = "Our History"
      P2title = "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"/>
      
      <div className='cardHistory'>
      <div>
      <CardHistory
      line ="linee"
      linear = "linear"
       img = "/assets/image/About/Abstract Design (9).png"
       title1= "202"
       span = "3"
       title2= "Resilience and Future Horizons"
       text = "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
       />
       <CardHistory
       img = "/assets/image/About/Abstract Design (9).png"
       title1= "201"
       span = "7"
       title2= "Innovation and Technology"
       text = "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
       />
       <CardHistory
       img = "/assets/image/About/Abstract Design (9).png"
       title1= "201"
       span = "2"
       title2= "Expansion and Recognition"
       text = "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
       />
       <CardHistory
       img = "/assets/image/About/Abstract Design (9).png"
       title1= "200"
       span = "5"
       title2= "Inception and Growth"
       text = "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
       />
      </div>
      </div>
    </section>
  )
}

export default OurHistory
