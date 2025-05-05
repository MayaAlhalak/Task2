import './CardHero.css'

function CardHero({text , title , border}) {
  return (
    <div className={`cardHero ${border}`}>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CardHero
