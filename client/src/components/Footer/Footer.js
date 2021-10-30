import React from 'react'
import logo from '../../images/logo.png'
function Footer() {
    return (
        <div className='w-full bg-black py-6'>
            <div className='w-full flex justify-center flex-col'> 
                <img src={logo} alt="my logo" className='w-32 block mx-auto' />
                <h2 className=' text-white block text-center'>Hamidreza Ramzani</h2>
            </div>
            <div className='w-full flex justify-between'> 
                <div>
                    <p className='font pl-3  text-gray-500'>(C) 2021 - Hamidreza Ramzani. All Rights Reserved.</p>
                </div>
                <div>
                    <ul className='pr-3 flex '>
                        <li className='text-white px-3'>
                            <a className="font" href="/">Home</a>
                        </li>

                        <li className='text-white px-3'>
                            <a className="font" href="/">About me</a>
                        </li>

                        <li className='text-white px-3'>
                            <a className="font" href="/">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
