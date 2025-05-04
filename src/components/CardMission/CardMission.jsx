import './CardMission.css'

function CardMission({show , img1 , img2 , title , title2 , text , style , dev1 , dev2 , dev11}) {
  return (
    <div className= {style}>
      <div className={dev1}>
        <div className={dev11}>
          {show &&  <img src={img2} alt="" />}
          <h3>{title}</h3>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className={dev2}>
        {show && <h4>{title2}</h4> }
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardMission
