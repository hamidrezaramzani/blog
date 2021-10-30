import React from 'react'
import Layout from '../Layout'
import BlogItem from './BlogItem'
import { useQuery } from 'react-query'
import { getAllBlogs } from '../../../api'
import Content from './Content'
import { useState, useContext } from 'react'
import { BlogContentContext } from '../../../context/BlogContentProvider'
function Manage() {
    const { isLoading, data } = useQuery("blogs", getAllBlogs, {
        onError: (err) => {
            console.log(err);
        }
    })

    const { state } = useContext(BlogContentContext);


    const renderData = () => {

        if (isLoading) {
            return "loading"
        }
        if (data.data.length) {
            return data.data.map(item => (
                <BlogItem key={item.id} timestamps={item.time} content={item.content} title={item.title} image={`http://localhost:5000/public/images/${item.image}`} />
            ))
        }
    }

    return (
        <Layout title="Manage Blogs">
            {state.show ? <Content /> : []}
            <table className="table text-gray-400 w-full border-separate space-y-6 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                    <tr>
                        <th className="p-3">title</th>
                        <th className="p-3 text-left">Show Content</th>
                        <th className="p-3 text-left">Image</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>
        </Layout>
    )
}

export default Manage
