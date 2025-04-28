import './Frequently.css'
import Title from '../Title/Title'
import { DateFreq } from '../Date/Datefreq'
import CardFreq from '../CardFreq/CardFreq'




function Frequently() {
  return (
    <section className='margin padding' id='Admissions' >
      <Title
      Ptitle = "Solutions For The Doubts"
      H2title ="Frequently Asked Questions"
      P2title = "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."/>
      <div className='Freq'>
        <div className='first'>
          {
          DateFreq.slice(0 , 4).map((item , index) => (
            <CardFreq
            key={index}
            question = {item.question}
            answer = {item.answer}
            />
          ))
          }
        </div>
        <div className='first'>
             {
          DateFreq.slice(4 , 8).map((item , index) => (
            <CardFreq
            key={index}
            question = {item.question}
            answer = {item.answer}
            />
          ))
          }
        </div>
      </div>
    </section>
  )
}

export default Frequently
