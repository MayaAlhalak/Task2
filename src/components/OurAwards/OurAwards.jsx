// 
import './OurAwards.CSS'
import Title from '../Title/Title'
import { DateAwards } from '../Date/DateAwards'
import CardBenfits from '../CardBenfits/CardBenfits'
import { useEffect, useState } from 'react'

function OurAwards() {
  const [next, setNext] = useState(2)
  const [number, setNumber] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 1000) {
        setNumber(1)
      } else {
        setNumber(3)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalSlides = Math.ceil(DateAwards.length / number)

  const goLeft = () => {
    if (next < totalSlides) {
      setNext(next + 1)
    }
  }

  const goRight = () => {
    if (next > 1) {
      setNext(next - 1)
    }
  }
  const start = (next - 1) * number
  const end = start + number
  const currentSlice = DateAwards.slice(start, end)

  return (
    <section className='padding margin sec-3'>
      <Title
      padd = 'padw'
        Ptitle="Our Achievements"
        H2title="Our Awards and Recognitions"
        P2title="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />

      <div className="slider">
        <div className="sliders" >
          <div className="subSlider">
            {currentSlice.map((item, index) => (
              <CardBenfits
                ClassBen="CardSlider"
                key={index}
                image={item.image}
                title={item.title}
                pargraph={item.pargraph}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='btns'>
        <button className='btn1'>8 More Awards</button>
        <div className='btn2'>
          <button onClick={goRight}>
            <img src="/assets/image/Testimonials/Vector (Stroke).png" alt="" />
          </button>
          <button onClick={goLeft}>
            <img src="/assets/image/Testimonials/Vector (Stroke) (1).png" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurAwards