import React from 'react'
import Button from './Button'

const Contact = () => {
    return (
        <>
            <div className="main my-24">
                <div className="grid lg:grid-cols-2 grid-cols-1">

                    <div className="left py-16 text-center">
                        <h1 className='text-4xl mb-3'>Get In Touch</h1>
                        <h3 className='text-6xl text-yellow-400 font-semibold mb-3'>Contact Me</h3>
                    </div>

                    <div className="right flex flex-col items-center justify-center lg:items-start gap-8" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1100">
                        <input type="text" placeholder='Name' className='w-3/4 px-[6px] py-3 bg-white z-10 border-2 border-[#FCA61F] rounded-md text-xl' />
                        <input type="email" placeholder='Email' className='w-3/4 px-[6px] py-3 bg-white z-10 border-2 border-[#FCA61F] rounded-md text-xl' />
                        <textarea type="text" placeholder='Message' className='w-3/4 px-[6px] py-3 bg-white z-10 border-2 border-[#FCA61F] rounded-md text-xl' />
                        <Button>Send</Button>
                        <div className=" absolute pink-blur h-52 w-52 blur-[90px] bg-purple-500"></div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
