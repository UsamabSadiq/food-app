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
import glasses from '../img/glassesimoji.png'

const Intro = () => {
    return (
        <>
            <div className="main grid grid-cols-2 mt-10">
                <div className="i-left py-16">
                    <h1 className='text-7xl mb-3'>Hy! I Am</h1>
                    <h3 className='text-8xl text-yellow-400 font-semibold mb-3'>Usama Sadiq</h3>
                    <p className='text-xl mb-3'>Front-End Developer, Web Designer, UI/UX Designer </p>
                    <Button>Hire Me..</Button>

                    <div className="img mt-10 flex items-center justify-start gap-5 cursor-pointer">
                        <img src={github} alt="github" className='scale-50' />
                        <img src={linkedin} alt="linkedin" className='scale-50' />
                        <img src={insta} alt="insta" className='scale-50' />

                    </div>
                </div>

                <div className="i-right flex justify-center items-center relative">

                    <img src={vector1} alt="" className='absolute scale-[0.90]' />
                    <img src={vector2} alt="" className='absolute scale-[0.80]' />
                    <img src={boy} alt="" className='absolute scale-[1.4]' />
                </div>

            </div>

        </>
    )
}

export default Intro
