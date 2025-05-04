import './CardStudents.css'

function CardStudents({img , title , text}) {
  return (
    <div className='CardStudent'>
        <div className='style'></div>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CardStudents
