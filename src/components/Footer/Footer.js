import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='border-y mt-5'>
            <div className='flex justify-end'>
                <div className='w-full'>

                    <img className='h-[300px] m-auto rounded-full' src='/img/sami.jpg' />

                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 w-full place-items-center'>
                    {/* 1st grid */}
                    <div>
                        <h2 className='mb-4 mt-8 font-bold'>Resources</h2>
                        
                            <div className='mb-4 text-gray-500'>
                                <Link to="/" className='hover:underline'>
                                    Home
                                </Link>                            

                        </div>
                        <ul>
                            <li className='mb-4  text-gray-500'>
                                <Link to="/about" className='hover:underline'>
                                    About
                                </Link>
                            </li>
                        </ul>

                    </div>
                    {/*2nd Grid  */}
                    <div>
                        <h2 className='mb-4 mt-8 font-bold'>Follow U/S</h2>
                        <ul>
                            <li className='mb-4 text-gray-500'>
                                <a href='https://github.com/samiullahhussai' target='blank' className='hover:underline'>
                                    GitHub
                                </a>

                            </li>

                        </ul>
                        <ul>
                            <li className='mb-4  text-gray-500'>
                                <Link to="/" className='hover:underline'>
                                    Discord
                                </Link>
                            </li>
                        </ul>

                    </div>
                    {/* 3rd grid */}

                    <div>
                        <h2 className='mb-4 mt-8 font-bold'>Legal</h2>
                        <ul>
                            <li className='mb-4 text-gray-500'>
                                <Link to="/" className='hover:underline'>
                                    Privacy-Policy
                                </Link>
                            </li>

                        </ul>
                        <ul>
                            <li className='mb-4  text-gray-500'>
                                <Link to="/" className='hover:underline'>
                                    Terms& Condition
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* visit us */}
            <div className='grid grid-cols-5 place-items-center  bg-orange-100 h-14 '>
                <div className='col-span-2'><h2 className='font-bold text-[22px]'>You Can also Visit U/S At:</h2></div>
                <div><img className='h-8' src='/img/github.jpeg' /></div>
                <div><img className='h-8' src='/img/FaceBook.jpeg' /></div>
                <div><img className='h-8' src='/img/twitter.jpeg' /></div>
            </div>
        </div>
    )
}

export default Footer