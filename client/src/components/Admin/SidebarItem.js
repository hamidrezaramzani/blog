import React from 'react'
import { Link } from 'react-router-dom'

function SidebarItem({title , Icon , link}) {
    return (
        <div className='w-full  h-16 '>
            <Link to={link} className='flex  justify-center hover:text-gray-400 text-center items-center  text-white'>
                <Icon className='mx-3 text-yellow-300' /> {title}
                
            </Link>
        </div>
    )
}

export default SidebarItem
