import CardHero from '../CardHero/CardHero'
import './Hero.css'

function Hero({herotext , herotext2}) {
  return (
    <section className='Hero padding' id='home'>
        <img src="/assets/image/Hero/Image Container.png" alt="" />
        <div className='heroContant'>
            <p className='pargraph1'>{herotext}</p>
            <h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span> </h1>
            <p className='pargraph2'>{herotext2}</p>
            <div className='allCard'>
                <CardHero
                title = "+7000"
                text = "Students Passed Out"
                />
                <CardHero
                title = "+37"
                text = "Awards & Recognitions"
                />
                <CardHero
                title = "+15"
                text = "Experience Educators"
                />
            </div>
      </div>
    </section>
  )
}

export default Hero
