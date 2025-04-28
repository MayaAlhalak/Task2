import { useState } from 'react'
import './CardFreq.css'

function CardFreq({question , answer}) {
  const [open , setopen] = useState(false)
  const show = () => {
    setopen(!open)
  }
  return (
    <div className={`CardFreq ${open ? 'white' : ''}`} >
      <div className='one'>
        <h3>{question}</h3>
        <button onClick={show}>{open ? "-" : "+"}</button>
      </div>
      {open && <p>{answer}</p>}
    </div>
  )
}

export default CardFreq
