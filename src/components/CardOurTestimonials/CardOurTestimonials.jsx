
import './CardOurTestimonials.css'

function CardOurTestimonials({image , name , star , discription}) {
  return (
    <div className='CardTest'>
        <img src={image} alt="" className='img1'/>
        <h3>{name}</h3>
        <img src={star} alt=""  className='img2'/>
        <p>{discription}</p>
    </div>
  )
}

export default CardOurTestimonials
