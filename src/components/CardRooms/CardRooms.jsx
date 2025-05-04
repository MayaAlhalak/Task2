import { useState } from 'react'
import { DateImg } from '../Date/DateImg'
import './CardRooms.css'

function CardRooms({title , text , name}) {
    const [next , setnext]= useState(1)
    const nextTo = () =>{
        if(next < 3){
            setnext(next + 1)
        }
    }
    const prevTo = () =>{
        if(next > 1 ){
            setnext(next - 1)
        }
    }
  return (
    <div className='position'>
        <div className='imgSlider'>
            <div className={`devImgs${next}`}>
                {
                    DateImg[name].map((item , index) => (
                        <img  src={item.img} alt="" />  
                    ))
                }
            </div>
        </div>
        <div className='CardRooms'>
            <div className='titlePlusBtn'>
                <h3>{title}</h3>
                <div >
                    <button onClick={prevTo}  >
                        <img   src="/assets/image/Testimonials/Vector (Stroke).png" alt="" />
                    </button>
                    <button  onClick={nextTo}  >
                        <img src="/assets/image/Testimonials/Vector (Stroke) (1).png" alt="" />
                    </button>
                </div>
            </div>
            <p>{text}</p>
        </div>
    </div>

  )
}

export default CardRooms
