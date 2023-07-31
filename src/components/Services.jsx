import React from 'react'
import Button from './Button'
import emoji1 from '../img/glasses.png'


const Services = () => {

    const card_data = [
        {
            icon: emoji1,
            heading: " Design",
            para: `Figma, Adobe photoshop, Adobe illustrator, Adobe Xd`
        },
        {
            icon: emoji1,
            heading: " Design",
            para: `Figma, Adobe photoshop, Adobe illustrator, Adobe Xd`
        },

    ]

    return (
        <>
            <div className="main grid lg:grid-cols-2 grid-cols-1 mt-32">
                <div className="i-left py-16 mt-[100px] lg:mt-0 text-center lg:text-left p-6 lg:p-0" data-aos='fade-right' data-aos-duration='600'>
                    <h1 className='text-4xl mb-3'>My Awesome</h1>
                    <h3 className='text-6xl text-yellow-400 font-semibold mb-3'>Services</h3>
                    <p className='text-md lg:mb-20 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis minima molestiae itaque laborum, cumque quo. Vero recusandae officiis similique eaque libero. Nihil animi, temporibus autem  sequi! </p>
                    <Button>Download CV...</Button>

                </div>

                <div className="flex flex-col items-center gap-5 p-6 lg:p-0" data-aos='fade-left' data-aos-duration='600'>

                    {
                        card_data.map(({ icon, heading, para }, index) => {
                            return (
                                <div key={index} className={` w-full flex tilt-in-right-1 ${(index % 2 === 0) ? "justify-end" : "justify-start"}`}>
                                    <div className="max-w-[450px] content flex-col flex items-center py-2 px-5 border-2 border-yellow-500 rounded-lg  gap-5">
                                        <img src={icon} alt="" width={95} className='mb-3' />
                                        <h2 className='text-xl font-semibold'>{heading}</h2>
                                        <p className='text-xl text-center'>{para}</p>
                                        <button className='bg-black text-white text-lg py-2 px-4'>Learn More!</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Services
