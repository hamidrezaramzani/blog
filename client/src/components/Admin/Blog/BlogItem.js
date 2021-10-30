import React from 'react'
import moment from 'moment'
import { FaEdit, FaTrash } from 'react-icons/fa'
function BlogItem({ title, image, timestamps }) {
    return (
        <tr className="bg-gray-800 ">
            <td className="p-3 text-white">
                {title}
            </td>
            <td className="p-3">
                <button className="bg-green-400 text-gray-50 rounded-md px-2">Show Content</button>
            </td>
            <td className="p-3 font-bold">
                <img src={image} width="100" alt="This is pic" />
            </td>
            <td className="p-3">
                {moment.unix(timestamps).format("Y/m/d h:m")}
            </td>
            <td className="p-3 text-center">
                <button className="bg-red-400 hover:bg-red-600 text-gray-50 rounded-md p-2"><FaTrash /></button>
                <button className="bg-yellow-400 hover:bg-yellow-600 ml-3 text-gray-50 rounded-md p-2"><FaEdit /></button>
            </td>


        </tr>
    )
}

export default BlogItem
