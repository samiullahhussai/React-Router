import React from 'react'
import { NavLink  } from 'react-router-dom'
function Header() {
    return (
        <nav className='flex h-19.5 flex-wrap justify-between items-center bg-orange-100 border-b border-black shadow sticky top-0'>

            <img className='h-16 w-14 m-1 rounded-lg ml-10' src='/img/guria.jpg' />
            <div className='m-2 lg:order-2'>
                <button className='border hover:ring-4 p-2 text-center rounded-2xl mr-3 hover:cursor-not-allowed  hover:bg-orange-500'>Login </button>
                <button className='border border-blue-500 p-2 text-center bg-orange-500 text-white font-bold rounded-lg hover:cursor-not-allowed hover:bg-orange-700 '>Get Started</button>
            </div>
            
            <div className='hidden lg:flex lg:order-1'>
                <ul className='flex space-x-2'>
                    <li>
                        <NavLink to="/" className={({isActive}) => 

                            ` ${isActive ? "text-blue-500 underline" :"text-gray-500"}`
                        }>
                            <div className='flex space-x-2 justify-center items-center'>
                                <img src='/img/home.jpeg' className='h-4 mr-2' /> Home
                                </div>
                        </NavLink>
                    </li>

                    {/* about */}
                    <li>
                        <NavLink to="/about" className={({isActive}) => 

                            ` ${isActive ? "text-blue-500 underline" :"text-gray-500"}`
                        }>
                            <div className='flex space-x-2 justify-center items-center'>
                                About
                                </div>
                        </NavLink>
                    </li>
                    {/* contct */}
                    <li>
                        <NavLink to="/contacts" className={({isActive}) => 

                            ` ${isActive ? "text-blue-500 underline" :"text-gray-500"} `
                        }>
                            <div className='flex space-x-2 justify-center items-center'>
                                Contact
                                </div>
                        </NavLink>
                    </li>

                    {/* github */}
                    <li>
                        <NavLink to="/github" className={({isActive}) => 

                            ` ${isActive ? "text-blue-500 underline" :"text-gray-500"} `
                        }>
                            <div className='flex space-x-2 justify-center items-center'>
                                Github
                                </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header