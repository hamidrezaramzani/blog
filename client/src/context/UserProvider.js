import { createContext, useState } from 'react'

export const UserContext = createContext({});
const UserProvider = (props) => {
    let data = { auth: false, token: null };
    const storageData = localStorage.getItem("hamidreza-blog-data");
    if (storageData) {
        const token = JSON.parse(storageData).token;
        data = { auth: true, token }
    }
    const [state, setState] = useState(data)
    return <UserContext.Provider value={{ state, setState }}>{props.children}</UserContext.Provider>
}

export default UserProvider