import React from 'react'
// import '../App.css'
import footerBg from '../img/wave.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import insta from '../img/instagram.png'

const Footer = () => {
    return (
        <>
            <div className='footer' >
                <span className="bgImg -z-10">
                    <img src={footerBg} alt="" className='object-cover' />
                </span>

                <div className="grid grid-cols-1">
                    <div className="div  ">
                        <p className='text-center text-2xl'>usamabsadiq@gmail.com</p>
                        <div className="imgcontainer flex justify-center">
                            <img src={github} alt="github" className='scale-50' />
                            <img src={linkedin} alt="linkedin" className='scale-50' />
                            <img src={insta} alt="insta" className='scale-50' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
