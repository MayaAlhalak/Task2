import './HeroAbout.css'

const HeroAbout = ({btn , title , text}) => {
  return (
    <section className='HeroAbout'>
        <img src="/assets/image/About/Abstract Design (5).png" alt="" />
        <div className='contenHero'>
          <div>
            <button>{btn}</button>
            <h2>{title}</h2>
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      
    </section>
  )
}

export default HeroAbout
