import React from 'react'
import '../../src/App.css'
import Button from './Button'
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

const Navbar = () => {

    const navItem = ['Home', 'Services', 'Experience', 'Portfolio', 'Testimonial']
    return (
        <>
            <div className="main pt-2 grid grid-cols-2 cursor-pointer">
                <div className="col1 flex justify-start items-center gap-28">
                    <div className="logo text-3xl font-semibold hover:text-yellow-400">USAMA</div>
                    <div className="toggleBtn py-1 px-2 text-xl flex gap-5 border-2 border-yellow-400 rounded-2xl">
                        <FaRegMoon />
                        <FaRegSun />
                    </div>
                </div>
                <div className="col2 flex justify-evenly items-center">
                    <ul className='flex gap-5 items-center text-lg '>
                        {navItem.map((item, ind) => {
                            return <li key={ind} className='hover:text-yellow-400'>{item}</li>

                        })}

                    </ul>
                    <div className=''>
                        <Button>Contact</Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
