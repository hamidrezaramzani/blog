import React from 'react'
import PostItem from './PostItem'

function Posts() {
    return (
        <div className='w-1/2 flex justify-center flex-wrap mx-auto my-12'>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    )
}

export default Posts
