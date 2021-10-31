import React from 'react'
import moment from "moment";
import { Link } from 'react-router-dom';
function PostItem({ id, title, description, image, time }) {
    return (
        <div className='w-3/6 p-2 hover:bg-gray-100 transition'>
            <Link to={`/blogs/${id}`}>
                <img src={`http://localhost:5000/public/images/${image}`} alt="Post avatar" className="w-full " />
                <span className="block text-center pt-3 text-gray-400">{moment.unix(time).format("Y/m/d h:m")}</span>
                <h2 className='p-2 text-center text-xl text-gray-700'>{title}</h2>
                <p className='p-1 text-center text-gray-400'>{description}</p>
            </Link>

        </div>
    )
}

export default PostItem
