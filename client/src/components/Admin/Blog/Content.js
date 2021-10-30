import React from 'react'
import { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BlogContentContext } from '../../../context/BlogContentProvider'
import parse from 'html-react-parser';

function Content() {
    const { state, setState } = useContext(BlogContentContext);

    const handleClose = () => {
        setState(false)
    }
    return (
        <div className='absolute w-full h-vh-full bg-gray-100 top-0 left-0'>
            <div className='w-full p-2 flex float-right'>
                <button onClick={handleClose}><FaTimes /></button>
            </div>
            <div className='w-full px-2'>
                {parse(state.content)}
            </div>
        </div>
    )
}

export default Content
