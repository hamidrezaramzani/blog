import React from 'react'

function JoinUs() {
    return (
        <div className="flex w-4/6 p-8 justify-between items-center mx-auto my-5 bg-gray-200 rounded">
            <div>
                <h2 className="text-3xl">Join Us</h2>
                <p>you can Join us for reci</p>
            </div>
            <div>
                <input type="text" className="w-72 h-10 outline-none shadow-sm px-2" placeholder="Fullname" name='fullname' />
            </div>
            <div>
                <input type="text" className="w-72 h-10 outline-none shadow-sm px-2" placeholder="Email" name='Email' />
            </div>
            <div>
                <button className="w-72 h-10 outline-none shadow-md bg-gray-700 text-white hover:bg-gray-800 px-2">Join Us</button>
            </div>
        </div>
    )
}

export default JoinUs
