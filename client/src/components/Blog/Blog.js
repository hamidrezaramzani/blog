import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getBlogItem } from "../../api";
import parse from 'html-react-parser';

const Blog = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery(["blog", id], () => getBlogItem(id))

    const renderBlogItem = () => {
        if (isLoading)
            return "Loading"

        if (data) {
            return <div className="p-4">
                <div className="w-full">
                    <img className="w-full" src={`http://localhost:5000/public/images/${data.data.image}`} />
                </div>

                <div className="py-5">
                    <h2 className="block text-left text-4xl">{data.data.title}</h2>
                    <p className="block text-left text-gray-500">{data.data.description}</p>
                </div>
                <div className="w-full">
                    {parse(data.data.content)}
                </div>
            </div>
        }
    }
    return <>
        <Header />
        <div className="w-full">
            {renderBlogItem()}
        </div>
        <Footer />
    </>
}

export default Blog;