import './CardStudents.css'

function CardStudents({img , title , text}) {
  return (
    <div className='hover CardStudent'>
        <div className='style'></div>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default CardStudents
