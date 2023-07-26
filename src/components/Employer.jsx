import React from 'react'
import Button from './Button'
import upwork from '../img/Upwork.png'
import fiverr from '../img/fiverr.png'
import facebook from '../img/Facebook.png'
import shopify from '../img/Shopify.png'
import amazon from '../img/amazon.png'



const Employer = () => {
    const imgArr = [
        {
            img: upwork,
            topPos: '-top-12',
            leftPos: 'left-24'
        },

        {
            img: shopify,
            topPos: 'top-20',
            leftPos: '-left-12'
        },
        {
            img: fiverr,
            topPos: 'top-20',
            leftPos: 'left-60'
        },
        {
            img: facebook,
            topPos: 'top-60',
            leftPos: 'left-24'
        },
    ]
    return (
        <>
            <div className="main grid grid-cols-2 mt-32" data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="i-left py-16">
                    <h1 className='text-4xl mb-3'>My Awesome</h1>
                    <h3 className='text-6xl text-yellow-400 font-semibold mb-3'>Services</h3>
                    <p className='text-md mb-20 pr-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis minima molestiae itaque laborum, cumque quo. Vero recusandae officiis similique eaque libero. Nihil animi, temporibus autem  sequi! </p>
                    <Button>Hire Me...</Button>

                </div>

                <div className="right relative mt-10 cursor-pointer ">
                    <div className="blueCircle blur-2xl absolute left-64 bg-blue-700 rounded-full h-56 w-56"></div>
                    <div className="blueCircle blur-2xl absolute left-60 top-20 bg-yellow-500 rounded-full h-56 w-56"></div>

                    <div className="main-w-circle relative left-36 top-8 bg-white w-72 h-72 rounded-full shadow-2xl">
                        {imgArr.map((item, index) => {
                            return (
                                <div key={index} className={`sec-w-circle absolute ${item.topPos} ${item.leftPos} w-24 h-24 border-2 rounded-full flex justify-center items-center bg-white shadow-md`}>
                                    <img src={item.img} alt="" className='scale-[0.6]' />
                                </div>
                            )
                        })}
                        <div className="sec-w-circle absolute left-24 top-20 w-24 h-24 border-2 rounded-full flex justify-center items-center bg-white shadow-md">
                            <img src={amazon} alt="" className='scale-[0.6]' />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Employer
