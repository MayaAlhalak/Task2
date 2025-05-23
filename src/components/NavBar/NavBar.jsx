import { useState } from 'react'
import './NavBar.css'
import {  NavLink } from 'react-router-dom'
const NavBar = () => {
  const [open , setopen]=useState(false)
  const [active , setactive]=useState(1)
  const listdown = () => {
    setopen(!open)
  };

  const links = [
    {
      id:1,
      name : "Home",
      hree : "/" ,
    } , 
    {
      id:2,
      name :"About" ,
      hree : "/About" ,
    } , 
    {
      id:3,
      name : "Academics" ,
      hree : "/Academics" ,
    } ,
    {
      id:4,
      name : "Admissions",
      hree : "/Admissions" ,
    } , 
    {
      id:5,
      name :"Student Life" ,
      hree : "/Student" ,
    } , 
    {
      id:6,
      name : "Contact" ,
      hree : "/Contact" ,
    } 
  ]
  
     
  
  return (
   <>
    <nav>
      <div className='top'>
        <img className='topOne' src="/assets/image/NavBar/Abstract Design (1).png" alt="" />
        <img className='topTwo' src="/assets/image/NavBar/boll.png" alt="" />
        <p>Admission is Open, Grab your seat now
          <img src="/assets/image/NavBar/Vector (Stroke).png" alt="" /> 
        </p>
        <img className='topThree' src="/assets/image/NavBar/Abstract Design (4).png" alt="" />
        <img className='topFour' src="/assets/image/NavBar/Abstract Design (5).png" alt="" />
      </div>
      <div className='bottom'>
        <div className='devimge' >
        <img className='logo' src="/assets/image/NavBar/Logo.png" alt="" />
        </div>
        <div className='devlink'>
        {
                links.map((item , index) => (
                      <li key={index} onClick={() =>setactive(item.id)} className= {active == item.id ? 'color2' : ''}>
                        <NavLink to={item?.hree} className={item?.id == 6 ? 'color' : ''}>{item?.name}</NavLink>
                      </li>
                ))
                  }
        </div>
        <div className='devbtn' >
            <img onClick={listdown} src="/assets/image/NavBar/Icon.png" alt="" />
        </div>
          
      </div>
    </nav>
    <div className={open ? 'isopen' : 'isClose'}>
        {
                links.map((item , index) => (
                      <li key={index}  onClick={() =>setactive(item.id)} className= {active == item.id ? 'color2' : ''}>
                        <a onClick={listdown} href={item.hree}>{item.name}</a>
                      </li>
                ))
                  }
        </div>
   </>
  )
}

export default NavBar
