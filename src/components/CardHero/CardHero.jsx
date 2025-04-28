import './CardHero.css'

function CardHero({text , title}) {
  return (
    <div className='cardHero'>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CardHero
