import React from 'react'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal';


const Home = () => {
  return (
    <>
    <div className=' w-full h-screen' name='Home'>
        <div className="py1 home px-[50px] py-[300px] sm:px-[80px] lg:px-[125px] xl:px-[250px] xl:py-[380px] 2xl:px-96 2xl:py-96 bg-[url('./photos/pqdI.gif')] h-screen bg-cover">
        <Fade Fade top big>
            <p className="py1 text-emerald-200 md:text-2xl xl:text-3xl">Hi, i am</p>
            <h1 className="py1 pb-3 text-white text-2xl md:text-4xl xl:text-5xl">Arusula Vijay Sai Yadav</h1>
            <button className="py-2 px-4 font-semibold border border-emerald-200 text-emerald-200 hover:bg-emerald-200 hover:text-black ease-in duration-300">
                <Link className='group' to="Work"smooth={true} offset={50} duration={500}>My Work </Link></button>
          </Fade>
        </div>
    </div>
    </>
  )
}

export default Home