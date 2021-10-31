import React from 'react'
import moment from 'moment'
import { FaTrash } from 'react-icons/fa'
import { useContext } from 'react'
import { BlogContentContext } from '../../../context/BlogContentProvider'
import swal from 'sweetalert2/dist/sweetalert2.js'
import { useMutation } from 'react-query'
import 'sweetalert2/src/sweetalert2.scss'
import { deleteBlogItem } from "../../../api.js";
import { queryClient } from '../../../App'
function BlogItem({ title, image, timestamps, content, id }) {
    const { mutate } = useMutation((id) => deleteBlogItem(id), {
        onSuccess: () => {
            queryClient.refetchQueries("blogs");
        }
    })
    const { setState } = useContext(BlogContentContext)
    const handleShowContent = (content) => {
        setState({ show: true, content })
    }

    const handleDelete = (id) => {
        swal.fire({
            title: 'Delete Blog',
            text: "Do you really want to delete this blog?",
            icon: 'question',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            showCloseButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                mutate([id]);
            }
        })
    }
    return (
        <tr className="bg-gray-800 ">
            <td className="p-3 text-white">
                {title}
            </td>
            <td className="p-3">
                <button className="bg-green-400 text-gray-50 rounded-md px-2" onClick={() => handleShowContent(content)}>Show Content</button>
            </td>
            <td className="p-3 font-bold">
                <img src={image} width="100" alt="This is pic" />
            </td>
            <td className="p-3">
                {moment.unix(timestamps).format("Y/m/d h:m")}
            </td>
            <td className="p-3 text-center">
                <button className="bg-red-400 hover:bg-red-600 text-gray-50 rounded-md p-2" onClick={() => handleDelete(id)}><FaTrash /></button>
            </td>


        </tr>
    )
}

export default BlogItem
