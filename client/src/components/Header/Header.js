import React from 'react'
import logo from '../../images/logo.png'
import Typing from 'react-typing-animation';

function Header() {
    return (
        <header className="w-full h-vh-full header relative">
            <div className="absolute w-full h-20 flex justify-between">
                <ul className="flex h-20 items-center">
                    <li className=''>
                        <a href="/">
                            <img src={logo} alt="" className='w-20' />
                        </a>
                    </li>
                    <li className='px-1 mx-2 rounded text-white hover:text-white transition hover:bg-gray-800'>
                        <a href="/">Home</a>
                    </li>
                    <li className='px-1 mx-2 rounded text-white hover:text-white transition hover:bg-gray-800'>
                        <a href="/">Travel</a>
                    </li>

                    <li className='px-1 mx-2 rounded text-white hover:text-white transition hover:bg-gray-800'>
                        <a href="/">Food</a>
                    </li>

                    <li className='px-1 mx-2 rounded text-white hover:text-white transition hover:bg-gray-800'>
                        <a href="/">Lifecycle</a>
                    </li>
                </ul>


            </div>
            <div className='absolute w-2/6 h-96 left-32 top-40 flex-col flex items-start justify-start'>
                <h1 className='text-5xl tracking-widest text-white font2 leading-normal text-left text-full '>
                    Welcome To <br />
                    <Typing className='text-yellow-500'>Hamidreza Ramzani</Typing>
                     Blog
                </h1>
                <p className='py-3  font text-gray-300  block  font float-left'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quia qui vero, omnis dolorum minus unde odio nesciunt animi. Repellat necessitatibus iste totam autem eius placeat reiciendis asperiores consequatur voluptatibus?
                </p>
                <a href="/" className="w-48 mt-3 font text-white text-center border-white border p-3 hover:bg-white hover:text-gray-800 transition float-left inline-block">GETTING STARTED</a>
            </div>
        </header>
    )
}

export default Header
