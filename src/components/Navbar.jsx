import React from 'react'
import '../../src/App.css'
import Button from './Button'
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

const Navbar = ({ modeChange, iconset }) => {
    console.log('iconSet working', iconset.color);

    const navItem = ['Home', 'Services', 'Experience', 'Portfolio', 'Testimonial']
    return (
        <>
            <div className="App pt-2 grid grid-cols-2 cursor-pointer" data-aos="fade-right" data-aos-duration="40">
                <div className="col1 flex justify-start items-center gap-28">
                    <div className="logo text-3xl font-semibold hover:text-yellow-400">USAMA</div>
                    <div onClick={() => modeChange()} className="toggleBtn py-1 px-2 text-xl flex gap-5 border-2 border-yellow-400 rounded-2xl">
                        {
                            iconset.color === 'black' ? <FaRegMoon className='text-yellow-600' /> : <FaRegSun className='text-yellow-600' />
                        }
                    </div>
                </div>
                <div className="col2 flex justify-evenly items-center">
                    <ul className='flex gap-5 items-center text-lg '>
                        {navItem.map((item, ind) => {
                            return <li key={ind} className='hover:text-yellow-400'>{item}</li>

                        })}

                    </ul>
                    <div>
                        <Button>Contact</Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
