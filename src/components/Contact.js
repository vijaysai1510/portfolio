import React from 'react'


const Contact = () => {
  return (
    <div name="Contact" className=" w-full h-screen bg-black flex  justify-center items-center text-white px-5">
        <form className="flex flex-col max-w-[600px] w-full font-bold" method="POST" action="https://getform.io/f/10147710-8c76-4255-a533-724dc81e4046">
            <div className="text-white ">
                <h2 className=" py1 text-white text-4xl underline underline-offset-8 decoration-emerald-200 ">Contact</h2><br/>
            </div>
            <input type="text" placeholder="Name" name="name" className="rounded p-2 text-black"/>
            <input type="email" placeholder="Your Email" name="Email" className=" p-2 my-4 rounded text-black"/>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="texxt-black p-2 rounded text-black"></textarea><br/>
            <button type="submit" className="py-2 px-3 w-24 font-semibold border border-emerald-200 text-emerald-200 hover:bg-emerald-200 hover:text-black ease-in duration-300">Submit</button>
        </form>
    </div>
  )
}

export default Contact
