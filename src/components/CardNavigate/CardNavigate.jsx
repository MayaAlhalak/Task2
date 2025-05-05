import './CardNavigate.css'

function CardNavigate({title , text , btn}) {
  return (
    <div className='hover cardNavigate'>
      <h3>{title}</h3>
      <div className='underLine'>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
      <p>{text}</p>
      <button>{btn}
        <img src="/assets/image/Testimonials/Vector (Stroke) (1).png" alt="" />
      </button>
    </div>
  )
}

export default CardNavigate
