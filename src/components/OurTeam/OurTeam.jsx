import CardMission from '../CardMission/CardMission'
import Title from '../Title/Title'
import './OurTeam.css'

function OurTeam() {
    const CardMiss = [
        {
            show : true,
            img2 :"/assets/image/About/Image (2).png",
            title : "Ms. Sarah Anderson",
            img1 : "/assets/image/About/Button.png",
            title2 : "Qualification:Bachelor's Degree in Early Childhood Education" ,
            text : "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."  
        },
        {
            show : true,
            img2 :"/assets/image/About/Image (3).png",
            title : "Mr. David Roberts",
            img1 : "/assets/image/About/Button.png",
            title2 : "Qualification: Master's Degree in Elementary Education",
            text : "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."   
        },
        {
            show : true,
            img2 :"/assets/image/About/Image (4).png",
            title : "Ms. Emily Hernandez",
            img1 : "/assets/image/About/Button.png",
            title2 : "Qualification: Diploma in Child Psychology"  ,
            text : "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn." 
        },
        {
            show : true,
            img2 :"/assets/image/About/Image (5).png",
            title : "Mr. Michael Turner",
            img1 : "/assets/image/About/Button.png",
            title2 : "Qualification: Bachelor's Degree in Physical Education" ,
            text : "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."  
        },
        {
            show : true,
            img2 :"/assets/image/About/Image (6).png",
            title : "Ms. Jessica Lee",
            img1 : "/assets/image/About/Button.png",
            title2 : "Qualification: Master's Degree in Special Education"  ,
            text : "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn." 
        },
        {
            show : true,
            img2 :"/assets/image/About/Image (7).png",
            title : "Mr. William Parker",
            img1 : "/assets/image/About/Button.png",
            title2 : "Qualification: Bachelor's Degree in Fine Arts" ,
            text : "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."  
        },
       
    ]
  return (
    <section className='padding margin'>
      <Title
      classTitle = "classTeam"
      Ptitle = "Our Teachers With Experties"
      H2title="Our Team Members"
      P2title ="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."/>
      <div className='maCardAll'>
        <div className='maCardOne'>
            {CardMiss.slice(0 , 2).map((item , index) =>(
                <CardMission
                    style = "maOne"
                    dev1 = "maOne1"
                    dev2 = "maTwo2"
                    dev11 = "maOne2"
                    show={item.show}
                    img2={item.img2}
                    title = {item.title}
                    img1 = {item.img1}
                    title2={item.title2}
                    text ={item.text}/>
            ))}
        </div>
        <div className='maCardOne'>
            {CardMiss.slice(2 , 4).map((item , index) =>(
                <CardMission
                    style = "maOne"
                    dev1 = "maOne1"
                    dev2 = "maTwo2"
                    dev11 = "maOne2"
                    show={item.show}
                    img2={item.img2}
                    title = {item.title}
                    img1 = {item.img1}
                    title2={item.title2}
                    text ={item.text}/>
            ))}
        </div>
        <div className='maCardOne'>
            {CardMiss.slice(4 , 8).map((item , index) =>(
                <CardMission
                    style = "maOne"
                    dev1 = "maOne1"
                    dev2 = "maTwo2"
                    dev11 = "maOne2"
                    show={item.show}
                    img2={item.img2}
                    title = {item.title}
                    img1 = {item.img1}
                    title2={item.title2}
                    text ={item.text}/>
            ))}
        </div>
       
      </div>
    </section>
  )
}

export default OurTeam
