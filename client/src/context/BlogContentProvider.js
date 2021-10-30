import { createContext, useState } from 'react'

export const BlogContentContext = createContext(false);
const BlogContentProvider = (props) => {
  
    const [state, setState] = useState({show : true , content : ""})
    return <BlogContentContext.Provider value={{ state, setState }}>{props.children}</BlogContentContext.Provider>
}

export default BlogContentProvider