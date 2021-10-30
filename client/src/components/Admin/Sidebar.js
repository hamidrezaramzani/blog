import React from 'react'
import { Link } from 'react-router-dom'

import { FaHome , FaListOl } from 'react-icons/fa'
import {AiOutlinePlus , AiOutlineLogout} from 'react-icons/ai'
import logo from '../../images/logo.png'
import SidebarItem from './SidebarItem'
function Sidebar() {
    return (
        <div className='w-full md:w-1/6 h-vh-full bg-black'>
            <div className='w-full py-4'>
                <Link to="/" className='flex justify-center items-center'>
                    <img src={logo} className='w-20' alt="hamidrezaramzani logo" />
                    <h2 className='text-2xl text-white'>HamidrezaRamzani</h2>
                </Link>
            </div>

            <SidebarItem title="Dashboard" Icon={FaHome} link="/admin/dashboard" />
            <SidebarItem title="Add Blog" Icon={AiOutlinePlus} link="/blog/new" />
            <SidebarItem title="Manage Blogs" Icon={FaListOl} link="/blog/manage" />
            <SidebarItem title="Logout" Icon={AiOutlineLogout} link="/users/logout" />
        </div>
    )
}

export default Sidebar
