import React from 'react'
import Button from './Button'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import insta from '../img/instagram.png'
import vector1 from '../img/Vector1.png'
import vector2 from '../img/Vector2.png'
// import thumbup from '../img/thumbup.png'
import boy from '../img/boy.png'
// import crown from '../img/crown.png'

const Intro = () => {
    return (
        <>
            <div className="main grid text-center lg:text-left grid-cols-1 lg:grid-cols-2 mt-10" >
                <div className="i-left py-16" data-aos='fade-down' data-aos-duration='600'>
                    <h1 className=' text-7xl mb-3'>Hy! I Am</h1>
                    <h3 className='pt-4 lg:pt-0 text-8xl text-yellow-400 font-semibold mb-3'>Usama Sadiq</h3>
                    <p className='text-xl mb-3 pt-6 lg:pt-6'>Front-End Developer, Web Designer, UI/UX Designer </p>
                    <Button customClass="mt-8 lg:mt-0" >Hire Me..</Button>

                    <div className="img pt-[50px] lg:pt-0 justify-center  lg:mt-0 flex items-center lg:justify-start gap-5 cursor-pointer">
                        <img src={github} alt="github" className='scale-50' />
                        <img src={linkedin} alt="linkedin" className='scale-50' />
                        <img src={insta} alt="insta" className='scale-50' />

                    </div>
                </div>

                <div className="i-right mt-[250px]  flex justify-center items-center relative" data-aos='fade-up' data-aos-duration='40'>

                    <img src={vector1} alt="" className='absolute scale-[0.90]' />
                    <img src={vector2} alt="" className='absolute scale-[0.80]' />
                    <img src={boy} alt="" className='absolute scale-[1.4]' />
                </div>

            </div>

        </>
    )
}

export default Intro
