import React from 'react'


const About = () => {
  return (
    <div className="About py-44 " name="About">
        <h2 className=" text-white text-center text-4xl underline underline-offset-8 decoration-emerald-200 ">About</h2><br/>
        <div className="min-[1880px]:px-[650px] sm:px-[100px] lg:px-[200px] min-[1440px]:px-[300px] px-[20px]">
        <p className=" text-white text-left text-xl">Hello! I am Vijay Sai, a passionate front end developer, a data analysis enthusiast based in Hyderabad, India.</p>
        <p className=" text-white text-left text-xl">Qualification- Btech, MLR institute of technology.</p>
        <p className=" text-white text-left text-xl">Basketball is one of my passions, and I also enjoy reading comic books.</p>
        </div><br/><br/><br/><br/><br/>

        <h2 className=" text-white text-center text-4xl underline underline-offset-8 decoration-emerald-200 ">Skills</h2><br/>
        <div className="sm:text-center  sm:flex ">
            <div className="min-[1880px]:pl-[800px] min-[320px]:pl-[50px]  sm:text-center md:pl-[200px] lg:pl-[350px] min-[1440px]:pl-[530px]">
                <h2 className="text-emerald-200  text-2xl ">Programming</h2><br/>
                <ul>
                    <li className="text-white text-left text-lg ">Java</li>
                    <li className="text-white text-left text-lg ">Python</li>
                    <li className="text-white text-left text-lg ">SQL</li>
                </ul>
            </div>
            <div className="min-[1880px]:pl-[100px] min-[320px]:pl-[50px] sm:text-center pt-[15px] sm:pt-0 md:pl-[90px] lg:pl-[100px]">
                <h2 className="text-emerald-200  text-2xl ">Web-Development</h2><br/>
                <ul>
                    <li className="text-white text-left text-lg ">HTML</li>
                    <li className="text-white text-left text-lg ">CSS</li>
                    <li className="text-white text-left text-lg ">Java Script</li>
                </ul>
            </div>
        </div>
        <div className="text-center pt-[30px]">
            <a href={require("../photos/vijay resume.pdf")} className="btn btn-fill"  download>
            <button className="py-2 px-14 font-semibold border border-emerald-200 text-emerald-200 hover:bg-emerald-200 hover:text-black ease-in duration-300">Resume</button>
            </a>
        </div>
    </div>
  )
}

export default About
