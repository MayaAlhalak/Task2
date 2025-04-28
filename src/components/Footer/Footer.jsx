import './Footer.css'

function Footer() {
    const row1 = ["Features" , "Our Testimonials" , "FAQ"]
    const row2 = ["Our Mission" , "Our Vission" , "Awards and Recognitions" , "History" , "Teachers"]
    const row3 = ["Special Features" , "Gallery"]
    const row4 = ["Information" , "Map & Direction"]
  return (
    <section className='footer' id='Contact'>
        <div className='allDev'>
            <div className='devLeft'>
                <div className='devLeftone' >
                    <img src="/assets/image/NavBar/Logo.png" alt="" />
                    <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                </div>
                <div className='devLefttwo'>
                    <div>
                        <img src="/assets/image/footer/Icon.png" alt="" />
                        <p>hello@littlelearners.com</p>
                    </div>
                    <div className='Two'>
                        <img src="/assets/image/footer/Icon (1).png" alt="" />
                        <p>+91 91813 23 2309</p>
                    </div>
                    <div>
                        <img src="/assets/image/footer/Icon (2).png" alt="" />
                        <p>Somewhere in the World</p>
                    </div>
                </div>
            </div>
            <div className='devRight'>
                <div className='devRightone'>
                    <div>
                        <h3>Home</h3>
                        {
                            row1.map((item , index) => (
                                
                                <p>{item}</p>
                            ))
                        }
                    </div>
                    <div>
                        <h3>About Us</h3>
                        {
                            row2.map((item , index) => (
                                <p>{item} </p>
                            ))
                        }
                    </div>
                </div>
                <div className='devRightone'>
                    <div>
                        <h3>Academics</h3>
                        {
                            row3.map((item , index) => (
                                <p>{item} </p>
                            ))
                        }
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        {
                            row4.map((item , index) => (
                                <p>{item} </p>
                            ))
                        }
                    </div>
               </div>
            </div>
        </div>
        <div className='allDev2'> 
            <div className='allDev2one'>
                <p>Terms of Service</p>
                <p className='mid'>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>
            <div className='allDev2two'>
                <img src="/assets/image/footer/Button (1).png" alt="" />
                <img src="/assets/image/footer/Button (2).png" alt="" />
                <img src="/assets/image/footer/Button.png" alt="" />
            </div>
        </div>
        <div className='allDev3'>
            <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer
