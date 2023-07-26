import React from 'react'

const Button = ({ children }) => {
    return (
        <>
            <button className="contactBtn py-2 px-6 text-lg text-white rounded-3xl bg-gradient-to-tl from-yellow-300 via-yellow-400 to-yellow-500 shadow-[0px_19px_33px_2px_#f6e05e] hover:border-yellow-400 hover:text-yellow-400 hover:bg-none hover:duration-300 ">{children}</button>
        </>
    )
}

export default Button
