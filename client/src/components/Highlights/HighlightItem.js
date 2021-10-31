import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
function HighlightItem({ id, image, title, description, time }) {
    return (
        <div className="w-1/2 h-auto p-2 hover:bg-gray-100 transition">
            <Link to={`/blog/${id}`}>
                <img src={`http://localhost:5000/public/images/${image}`} alt={title} className="object-cover" />
                <span className="w-full text-gray-400 py-3 block">{moment.unix(time).format("Y/m/d h:m")}</span>
                <h3 className="text-xl">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </Link>
        </div>
    )
}

export default HighlightItem
