import React from 'react'

const Experience = () => {
    const experienceData = [
        {
            numOfExp: '8+',
            text: 'Years Experience'
        },
        {
            numOfExp: '9+',
            text: 'Completed Projects'
        },
        {
            numOfExp: '5+',
            text: 'Companies Work'
        }
    ]
    return (
        <>
            <div className="main mt-40">
                <div className="flex justify-center gap-10 items-center">
                    {
                        experienceData.map(({ numOfExp, text }, index) => {
                            return (
                                <div key={index} className=" flex flex-col items-center ">
                                    <div className="circle text-4xl p-1 bg-gradient-to-r from-yellow-400 to-red-800 rounded-full w-auto" data-aos='flip-right' data-aos-duration='6000' >
                                        <div className="num bg-none rounded-full p-4">
                                            {numOfExp}
                                        </div>
                                    </div>
                                    <div className="text text-2xl px-2 ">
                                        {text}
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

export default Experience
