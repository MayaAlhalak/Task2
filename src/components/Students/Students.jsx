import { useEffect } from 'react'
import CardStudents from '../CardStudents/CardStudents'
import { DateStudent } from '../Date/DateStudent'
import Title from '../Title/Title'
import './Students.css'
import { useState } from 'react'

function Students() {
    const [x , setx]= useState(6)
    useEffect(()=>{
        const control = () =>{
            if(window.innerWidth < 1350){
                setx(4)
            }
            else {
                setx(6)
            }
        }
        control()
        window.addEventListener('resize', control)
        return ()=> window.removeEventListener('resize' , control)
    },[])

  return (
    <section className='padding margin'>
      <Title
      Ptitle= "Our Features"
      H2title= "What Students Learn"
      P2title= "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"/>
      <div className='allcards'>
      <div className='allcardstudent'>
       {
        DateStudent.slice(0 ,3).map((item , index) =>(
            <CardStudents
            key={index}
            img = {item.img}
            title = {item.title}
            text={item.text}/>
        ))
       }
      </div>
      <div className='allcardstudent'>
       {
        DateStudent.slice(3 ,x).map((item , index) =>(
            <CardStudents
            key={index}
            img = {item.img}
            title = {item.title}
            text={item.text}/>
        ))
       }
      </div>
      </div>
    </section>
  )
}

export default Students
