import React from 'react'

function PostItem() {
    return (
        <div className='w-3/6 p-2 hover:bg-gray-100 transition'>
            <a href="/">
                <img src="https://picsum.photos/300/200" alt="Post avatar" className="w-full " />
                <h2 className='p-2 text-center text-xl text-gray-700'>This is Post Title</h2>
                <p className='p-1 text-center text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt tempore iste obcaecati veritatis esse ab...</p>
            </a>

        </div>
    )
}

export default PostItem
