import './OurTestimonials.css'
import Title from '../Title/Title'
import { DateTestimonials } from '../Date/DateTestimonials'
import CardOurTestimonials from '../CardOurTestimonials/CardOurTestimonials'
import { useState } from 'react'

function OurTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const next = () => {
    setStartIndex((prev) => (prev + 1) % DateTestimonials.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + DateTestimonials.length) % DateTestimonials.length);
  };

  const Cards = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % DateTestimonials.length;
    Cards.push(DateTestimonials[index]);
  }

  return (
    <section className='padding  margin' id='academ'>
      <Title
        Ptitle="Their Happy Words 🤗"
        H2title="Our Testimonials"
        P2title="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className='CardTestimonials'>
        <button className='prev' onClick={prev}>
          <img src="/assets/image/Testimonials/Vector (Stroke).png" alt="prev" />
        </button>

        <div className="cardss">
          {Cards.map((item, index) => (
            <CardOurTestimonials
              key={index}
              image={item.image}
              name={item.name}
              star={item.star}
              discription={item.discription}
            />
          ))}
        </div>

        <button className='next' onClick={next}>
          <img src="/assets/image/Testimonials/Vector (Stroke) (1).png" alt="next" />
        </button>
      </div>
      <div className='under CardTestimonials'>
      <button onClick={prev}>
          <img src="/assets/image/Testimonials/Vector (Stroke).png" alt="prev" />
        </button>
        <button onClick={next}>
          <img src="/assets/image/Testimonials/Vector (Stroke) (1).png" alt="next" />
        </button>
      </div>
    </section>
  )
}

export default OurTestimonials

