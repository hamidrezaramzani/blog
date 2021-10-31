import React, { useRef } from 'react'
import { useMutation } from 'react-query'
import { joinToUs } from '../../api';


import swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function JoinUs() {
    const { mutate } = useMutation((data) => joinToUs(data), {
        onSuccess: () => {
            swal.fire({
                title: "Subscribed",
                text: "You have successfully joined us",
                icon: "success"
            })   
        } , 
        onError : (err) => {
            if (err.response.status == 400) {
                swal.fire({
                    title: "Join Failed",
                    text: "this email already registered",
                    icon: "error"
                })
            } else {
                swal.fire({
                    title: "Join Failed",
                    text: "server internal error",
                    icon: "error"
                })
            }
        }
    })
    const fullnameRef = useRef();
    const emailRef = useRef();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = {
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
        };
        mutate(data)
    }

    return (
        <div className="flex w-4/6 p-8 justify-between items-center mx-auto my-5 bg-gray-100 rounded">
            <div>
                <h2 className="text-3xl">Join Us</h2>
                <p>Get the latest news</p>
            </div>

            <form action="" onSubmit={handleSubmitForm} className="flex justify-between" >
                <div className="mx-4">
                    <input type="text" required ref={fullnameRef} minLength="5" className="w-72 h-10 outline-none shadow-sm px-2" placeholder="Fullname" name='fullname' />
                </div>
                <div className="mx-4">
                    <input type="email" required ref={emailRef} className="w-72 h-10 outline-none shadow-sm px-2" placeholder="Email" name='Email' />
                </div>
                <div className="mx-4">
                    <button className="w-72 h-10 outline-none shadow-md bg-gray-700 text-white hover:bg-gray-800 px-2">Join Us</button>
                </div>
            </form>
        </div>
    )
}

export default JoinUs
