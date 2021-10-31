import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router';
import { UserContext } from '../../context/UserProvider';
function Logout() {
    const { state, setState } = useContext(UserContext);
    useEffect(() => {
        if (state.auth) {
            localStorage.removeItem("hamidreza-blog-data");
            setState({ auth: false, token: null })
        }
    }, []);
    return <Redirect to='/admin/login' />
}

export default Logout
