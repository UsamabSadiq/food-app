import React from 'react'
import Button from './Button'
import upwork from '../img/Upwork.png'
import fiverr from '../img/fiverr.png'
import facebook from '../img/Facebook.png'
import shopify from '../img/Shopify.png'

const Employer = () => {
    const imgArr = [
        {
            img: upwork,
            pos: 90,
        },
        {
            img: facebook,
            pos: 0,
        },
        {
            img: shopify,
            pos: 90
        },
        {
            img: fiverr,
            pos: 180
        },
    ]
    return (
        <>
            <div className="main grid grid-cols-2 mt-32">
                <div className="i-left py-16">
                    <h1 className='text-4xl mb-3'>My Awesome</h1>
                    <h3 className='text-6xl text-yellow-400 font-semibold mb-3'>Services</h3>
                    <p className='text-md mb-20 pr-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis minima molestiae itaque laborum, cumque quo. Vero recusandae officiis similique eaque libero. Nihil animi, temporibus autem  sequi! </p>
                    <Button>Hire Me...</Button>

                </div>

                <div className="relative mt-10 cursor-pointer ">
                    <div className="blueCircle blur-xl absolute left-64 bg-blue-700 rounded-full h-52 w-52"></div>
                    <div className="blueCircle blur-xl absolute left-60 top-20 bg-yellow-500 rounded-full h-52 w-52"></div>
                    <div className="blueCircle absolute left-32 top-8  bg-white border-2 rounded-full h-60 w-60">
                        {/* <div className="img flex  justify-center items-center"> */}
                        {
                            imgArr.map((item, ind) => {
                                return (
                                    <div class={` relative w-20 h-20 border border-gray-500 rounded-full flex items-center justify-center `}>

                                        <div class={`w-1/2 h-1/2 absolute transform rotate-${item.pos} `}>
                                            <div className={` w-full h-full object-cover rounded-full `}>

                                                <img src={item.img} />

                                            </div>
                                        </div>
                                    </div>

                                )
                            })

                        }
                    </div>

                    {/* </div> */}
                </div>


            </div>


        </>
    )
}



export default Employer
