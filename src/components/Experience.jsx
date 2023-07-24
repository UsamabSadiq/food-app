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
                                <div className=" flex flex-col items-center gap-6">
                                    <div className="circle text-4xl p-6 border-4 border-green-500 rounded-full w-auto">{numOfExp}</div>
                                    <div className="text text-2xl px-5 ">
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
