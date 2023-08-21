import React from 'react'


const Work = () => {
  return (
    <div className="mywork pt-[100px] lg:pt-[190px] pb-[20px]" name="Work">
        <h2 className="text-white text-center text-4xl underline underline-offset-8 decoration-emerald-200 min-[1024px]:pb-[35px]">My Work</h2>
    <div className="Work sm:px-[190px] lg:px-[30px]  min-[1440px]:px-[50px] min-[1880px]:px-[190px] xl:px-[190px] lg:flex bg-black">
        <a href="https://numblegame.netlify.app/">
        <div className="  content w-[200px] relative shadow-lg  m-20 xl:m-16 lg:m-5 2xl:m-20 cursor-pointer overflow-hidden bg-black border border-emerald-200 transform hover:scale-110 transition ease-out duration-500">
            <img className="h-[200px] w-[200px] xl:h-[200px] xl:w-[200px] "  src={require('../photos/numble.png')} alt=""/>
            <div className="textcontent p-5 border-t border-emerald-200 w-[200px] h-[220px]">
                <p className="text-xl font-semibold text-emerald-200">Numble</p><br/>
                <p className="text-sm text-white">Developed a fun game using HTML,CSS and java script in which we have to guess the number in 7 given tries.</p>
            </div>
        </div>
        </a>
        <a href="https://github.com/vijaysai1510/Gender-and-Age">
        <div className="content w-[200px] relative shadow-lg  m-20 xl:m-16 lg:m-5 2xl:m-20 cursor-pointer overflow-hidden bg-black border border-emerald-200 transform hover:scale-110 transition ease-out duration-500">
            <img className="h-[200px] w-[200px] xl:h-[200px] xl:w-[200px]"  src={require('../photos/gender.png')} alt=""/>
            <div className="textcontent p-5 border-t border-emerald-200 w-[200px] h-[220px]">
                <p className="text-xl font-semibold text-emerald-200">Gender and Age:</p><br/>
                <p className="text-sm text-white">Developed a Machine Learning model which detects the gender and age of a person.</p>
            </div>
        </div>
        </a>
        <a href="https://github.com/vijaysai1510/Data-Analysis">
        <div className="content w-[200px] relative shadow-lg  m-20 xl:m-16 lg:m-5 2xl:m-20 cursor-pointer overflow-hidden bg-black border border-emerald-200 transform hover:scale-110 transition ease-out duration-500">
            <img className="h-[200px] w-[200px] xl:h-[200px] xl:w-[200px]"  src={require('../photos/student.png')} alt=""/>
            <div className="textcontent p-5 border-t border-emerald-200 w-[200px] h-[220px]">
                <p className="text-xl font-semibold text-emerald-200">Data Analysis:</p><br/>
                <p className="text-sm text-white">Performed analysis and visualization on student employment data using python.</p>
            </div>
        </div></a>
        <a href="https://github.com/vijaysai1510/Sign_Language_Detection">
        <div className="content w-[200px] relative shadow-lg  m-20 xl:m-16 lg:m-5 2xl:m-20 cursor-pointer overflow-hidden bg-black border border-emerald-200 transform hover:scale-110 transition ease-out duration-500">
            <img className="h-[200px] w-[200px] xl:h-[200px] xl:w-[200px]" src={require('../photos/sign.png')} alt=""/>
            <div className="textcontent p-5 border-t border-emerald-200 w-[200px] h-[220px]">
                <p className="text-xl font-semibold text-emerald-200">Sign Language Detection:</p><br/>
                <p className="text-sm text-white">Devoloped a machine learning model using tensorflow python library which detects the sign-language performed.</p>
            </div>
        </div>
    </a>
    </div>
    </div>
  )
}

export default Work
