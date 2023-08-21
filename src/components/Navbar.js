import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div name='barb' className='fixed w-full h-[80px] hidden lg:flex bg-transparent items-center z-10 text-emerald-200'>
      <div>
        <ul className='fixed min-[1880px]:right-10 hidden lg:flex xl:right-4 min-[1024px]:right-10' >
            <li className="mx-4 cursor-pointer"><Link to="Home"smooth={true} offset={50} duration={500}>
              Home
            </Link></li>
            <li className="mx-4 cursor-pointer"><Link to="Work"smooth={true} offset={50} duration={500}>
              Work
            </Link></li>
            <li className="mx-4 cursor-pointer"><Link to="About"smooth={true} offset={50} duration={500}>
              About
            </Link></li>
            
            <li className="mx-4 cursor-pointer"><Link to="Contact"smooth={true} offset={50} duration={500}>
              Contact
            </Link></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
