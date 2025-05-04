import './CardHistory.css'

function CardHistory({img ,title1 ,title2 , span , text , line , linear}) {
  return (
    <>
      
       <div className='allhistory'> 
            <div className='historyleft'>
                <div className={` ${linear}`} ></div>
                <div  className='Done'></div>
                <div className={`Dtwo ${line}`}></div>
                <img src={img} alt="" />
                <h3>{title1} <span>{span}</span></h3>
            </div>
            <div className='historyright'>
              <h3>{title2}</h3>
              <p>{text}</p>
            </div>
        </div>
    </>
  )
}

export default CardHistory
