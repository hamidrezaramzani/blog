import React from 'react'
import PostItem from './PostItem'
import { useQuery } from 'react-query'
import { getAllBlogs } from '../../api';
function Posts() {
    const { data, isLoading } = useQuery("blogs", getAllBlogs);

    const renderBlogs = () => {
        if (isLoading) {
            return <span>is loading</span>
        }
        if (data) {
            return data.data.map(item => (
                <PostItem {...item} key={item.id} />

            ))
        }

    }
    return (
        <div className='w-1/2 flex justify-center flex-wrap mx-auto my-12' id="posts">
            {renderBlogs()}
        </div>
    )
}

export default Posts
