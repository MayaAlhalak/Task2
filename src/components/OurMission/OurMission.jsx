import './OurMission.css'
import Title from '../Title/Title'
import CardMission from '../CardMission/CardMission'


function OurMission() {
  return (
    <section className='padding margin'>
      <Title
      padd = 'padm'
      Ptitle = "Mission & Visions"
      H2title = "Our Mission & Visions"
      P2title = "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."/>
        <div className='cardMiss'>
            <CardMission
                style = "card1"
                dev1 = "one"
                dev2="two"
                show={false}
                title = "Mission"
                img1 = "/assets/image/About/Icon.png"
                text = "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."/>
            <CardMission
                style = "card1"
                dev1 = "one"
                dev2="two"
                show={false}
                title = "Vision"
                img1 = "/assets/image/About/Icon (1).png"
                text = "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."/>
        </div>
    </section>
  )
}

export default OurMission
