import axios from 'axios'

const request = axios.create({
    timeout: 5000,
    baseURL: "http://localhost:5000/api/"
})

export const login = async ([url, data]) => {
    return await request.post(url, data);
}



export const newBlog = async ([url, data]) => {
    return await request.post(url, data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export const getAllBlogs = async () => {
    return await request.get("blog/all");
}


export const deleteBlogItem = async ([id]) => {
    return await request.get(`blog/delete/${id}`);
}


export const getBlogItem = async ([id]) => {
    return await request.get(`blog/item/${id}`);
}

export const joinToUs = async (data) => {
    return await request.post("subscribe/join", data);
}

export const getHighlights = async () => {
    return await request.get("blog/highlights");
} 