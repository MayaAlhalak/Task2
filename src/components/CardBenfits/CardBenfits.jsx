import './CardBenfits.css'

function CardBenfits({title , pargraph , image , ClassBen }) {
  return (
    <div className= {ClassBen}>
      <div className='sec-1'><img src= {image} alt="" /></div>
      <div className='sec-2'>
          <h3>{title}</h3>
          <p>{pargraph}</p>
      </div>
    </div>
  )
}

export default CardBenfits
