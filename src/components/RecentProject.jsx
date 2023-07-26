import React from 'react'
import ecommerce from '../img/ecommerce.png'
import musical from '../img/musicapp.png'
import sidebar from '../img/sidebar.png'

const RecentProject = () => {
    const img = [ecommerce, musical, sidebar]
    return (
        <>
            <div className="main mt-32 mb-20 ">
                <div className="top text-center mb-8" >
                    <h1 className='text-4xl mb-4'>Recent</h1>
                    <p className='text-6xl font-extrabold text-[#FCA61F]'>Portfolio</p>
                </div>

                <div className="content mb-4">
                    <div className="grid grid-cols-3 gap-6">
                        {
                            img.map((item, ind) => {
                                return (
                                    <div key={ind} className='p-5' data-aos='fade-left'>
                                        <img src={item} alt="" className='rounded-2xl' />
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default RecentProject
