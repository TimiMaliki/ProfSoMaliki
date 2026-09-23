import React from 'react'
import logo from "../images/dadsLogo.png"
type Props = {}

function Navbar({}: Props) {
  return (
    <div className='flex  justify-between'>

        {/* Logo */}

  <div className="logo -mt-24 text-start  w-1/2 p-12"><img src={logo.src} alt="Logo" className="h-16 w-16" /></div>

 {/* menus */}

  <div className="menu  -mt-12 text-start  w-1/2 ">
    <ul className='grid grid-cols-1 gap-1 place-content-center text-center'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>


    </div>
  )
}

export default Navbar