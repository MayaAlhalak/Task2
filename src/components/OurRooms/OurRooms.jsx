import CardRooms from '../CardRooms/CardRooms'
import Title from '../Title/Title'
import './OurRooms.css'

function OurRooms() {
    const btn =[{content : "All"} , 
        {content :"Classrooms"} ,
         {content :"Library"}  , 
          {content :"Science Lab "},
          {content :"Computer Lab  "}, 
           {content :" Garden and Nature Area"}  ]
  return (
    <section className='padding margin'>
      <Title
       padd = 'padm'
      Ptitle= "Our Gallery"
      H2title= "Our Rooms Gallery"
      P2title= "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>
      <div className='containar'>
        <div className='allbtn'>
            {
                btn.map((item , index) => (
                    <button key={index} className= {index == 0 ? 'color' : ''}>{item.content}</button>
                ))
            }
        </div> 
        <div >
            <CardRooms
            name = "Classrooms"
            title= "Classrooms"
            text= "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."/>
            <CardRooms
            name = "Library"
            title= "Library"
            text= "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."/>
            <CardRooms
            name = "Science"
            title= "Science Lab"
            text= "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."/>
            <CardRooms
            name = "Computer"
            title= "Computer Lab"
            text= "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"/>
            <CardRooms
             name = "Garden"
            title= "Garden and Nature Area"
            text= "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."/>
        </div>  
      </div>
    </section>
  )
}

export default OurRooms
