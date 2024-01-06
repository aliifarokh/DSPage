import React from 'react'
import { git, ins, link, web } from '../assets'

const Navbar = () => {
    return (
        <div className='w-full px-8 lg:px-24  h-[80px] flex text-white relative z-[10] '>

            <nav className='flex w-full  '>
                <ul className='flex gap-[16px] w-full justify-center sm:justify-end  -red-600 h-full items-center'>
                    <li className='h-full flex justify-center items-center'>
                        <a className='bg-[#45454d] w-[45px] relative h-[45px] rounded-full' href="https://www.linkedin.com/in/ali-farokh-front">
                            <img className='w-[25px] h-[25px] object-contain absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={link} alt="linkedin ali farokh" />
                        </a>
                    </li>
                    <li className='h-full flex justify-center items-center'>
                        <a className='bg-[#45454d] w-[45px] relative h-[45px] rounded-full' href="https://instagram.com/alifarokh_web?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D ">
                            <img className='w-[25px] h-[25px] object-contain absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={ins} alt="instagram ali farokh" />
                        </a>
                    </li>
                    <li className='h-full flex justify-center items-center'>
                        <a className='bg-[#45454d] w-[45px] relative h-[45px] rounded-full' href="https://github.com/aliifarokh">
                            <img className='w-[25px] h-[25px] object-contain absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={git} alt="github ali farokh" />
                        </a>
                    </li>
                    <li className='h-full flex justify-center items-center'>
                        <a className='bg-[#45454d] w-[45px] relative h-[45px] rounded-full' href="https://aliifarokh.github.io/portfolio/">
                            <img className='w-[25px] h-[25px] object-contain absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={web} alt="portfolio ali farokh" />
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar