import React from 'react'
import Sidebar from './Sidebar'

function Layout({ children , title }) {
    return (
        <div className='w-full flex w-vh-full justify-center'>
            <Sidebar />
            <div className='w-full md:w-5/6 h-vh-full p-5'>
                <div className='w-full py-3'>
                    <h1 className='text-xl'>{title}</h1>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Layout
