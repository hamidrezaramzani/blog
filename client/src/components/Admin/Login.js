import React, { useRef } from 'react'
import { login } from '../../api'
import { useMutation } from 'react-query'
function Login() {
    const { mutate } = useMutation((url , data) => login(url, data) , {
        onSuccess : (res) => {
                console.log(res);
        }
    })
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value.trim(),
            password: usernameRef.current.value.trim(),
        };

        mutate("user/login" , data)


    }
    return (
        <div className="w-full w-vh-full flex items-center justify-center">
            <div className="md:w-1/6 w-1/2 h-96 p-3 bg-gray-200">
                <h1 className="text-center block text-2xl">Login Page</h1>
                <form onSubmit={handleSubmitForm}>
                    <input required ref={usernameRef} type="text" name="username" className='w-full my-2 p-2' placeholder="username" />
                    <input required ref={passwordRef} type="text" name="password" className='w-full my-2 p-2' placeholder="password" />
                    <button className="w-full bg-gray-500 text-center text-white hover:bg-gray-700">login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
