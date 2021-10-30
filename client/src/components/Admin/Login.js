import React, { useRef, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../../api'
import { useMutation } from 'react-query'
import swal from 'sweetalert2/dist/sweetalert2.js'
import { UserContext } from '../../context/UserProvider'
import 'sweetalert2/src/sweetalert2.scss'
function Login() {
    const router = useHistory();
    const { state, setState } = useContext(UserContext)
    const { mutate } = useMutation((url, data) => login(url, data), {
        onSuccess: (res) => {
            localStorage.setItem("hamidreza-blog-data", JSON.stringify(res.data))
            setState({ auth: true, token: res.data.token })
        },
        onError: (err) => {
            if (err.response.status == 400) {
                swal.fire({
                    title: "Login Failed",
                    text: "username or password is invalid",
                    icon: "error"
                })
            } else {
                swal.fire({
                    title: "Login Failed",
                    text: "server internal error",
                    icon: "error"
                })
            }
        }
    })

    useEffect(() => {
        console.log(state.auth);
        if (state.auth) {
            router.push("/admin/dashboard");
        }
    }, [state])


    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value.trim(),
            password: passwordRef.current.value.trim(),
        };
        mutate(["user/login", data])
    }
    return (
        <div className="w-full w-vh-full flex items-center justify-center">
            <div className="md:w-1/6 w-1/2 h-96 p-3">
                <h1 className="text-center block text-2xl">Login Page</h1>
                <form onSubmit={handleSubmitForm}>
                    <input required ref={usernameRef} type="text" name="username" className='w-full bg-blue-100 my-2 p-2 outline-none' placeholder="username" />
                    <input required ref={passwordRef} type="password" name="password" className='w-full bg-blue-100 my-2 p-2 outline-none' placeholder="password" />
                    <button className="w-full bg-gray-500 text-center text-white hover:bg-gray-700">login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
