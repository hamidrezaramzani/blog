import React , {useContext} from 'react'
import { Redirect, Route } from 'react-router'
import {UserContext} from '../context/UserProvider'
function PrivateRoute({...props}) {
    const {state} = useContext(UserContext)
    return (
        state.auth ? <Route {...props} /> : <Redirect to="/admin/login" />
    )
}

export default PrivateRoute
