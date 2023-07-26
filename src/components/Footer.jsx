import React from 'react'
// import '../App.css'
import footerBg from '../img/wave.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import insta from '../img/instagram.png'

const Footer = () => {
    return (
        <>
            <div className='footer relative flex justify-center items-center ' >
                <span className="bgImg" data-aos='fade-right' duration='1000'>
                    <img src={footerBg} alt="" className='object-cover' />
                </span>

                <div className="child-1 absolute top-[23rem] flex flex-col items-center " data-aos='fade-up' duration='1100'>
                    <p className='text-2xl'>usamabsadiq@gmail.com</p>
                    <div className="imgcontainer flex justify-center">
                        <img src={github} alt="github" className='scale-50 text-white' />
                        <img src={linkedin} alt="linkedin" className='scale-50 text-white' />
                        <img src={insta} alt="insta" className='scale-50 text-white' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
