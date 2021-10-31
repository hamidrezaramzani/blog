import React, { useRef } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import Layout from '../Layout'
import { useState } from 'react';
import { useMutation } from 'react-query'
import { newBlog } from '../../../api';

import swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useHistory } from 'react-router';

function New() {
    const router = useHistory();
    const { mutate } = useMutation((url, data) => newBlog(url, data), {
        onSuccess: () => {
            swal.fire({
                title: "Success",
                text: "Blog Created",
                icon: "success",

            }).then(() => {
                router.push("/blog/manage")
            })
        },
        onError: () => {
            swal.fire({
                title: "Error",
                text: "Server internal error",
                icon: "error"
            })
        }
    })
    const titleRef = useRef();
    const descriptionRef = useRef();

    const [state, setState] = useState({
        editorState: EditorState.createEmpty()
    });



    const [file, setFile] = useState(null);

    const formData = new FormData();

    const onEditorStateChange = (editorState) => {
        setState({ editorState })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const content = draftToHtml(convertToRaw(state.editorState.getCurrentContent()))
        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        formData.append("title", title)
        formData.append("content", content)
        formData.append("image", file)
        formData.append("description", description)
        mutate(["blog/new", formData])
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const format = file.name.split(".")[1];
        const FORMATS = ["png", "gif", "jpg"]
        if (!FORMATS.includes(format)) {
            swal.fire({
                title: "Error",
                text: "Please select an image",
                icon: "error"
            })
            e.target.value = '';
            return;
        }
        setFile(file);

    }

    return (
        <Layout title={"Add Blog"}>
            <form action="" onSubmit={handleOnSubmit}>
                <input required type="file" name="file" onChange={handleImageChange} className='w-full p-2 outline-none  text-md border-b mb-5' />
                <input required minLength={5} ref={titleRef} type="text" name="title" placeholder='Title' className='w-full p-2 outline-none text-gray-800 text-md border-b mb-5' />
                <input required minLength={15} ref={descriptionRef} type="text" name="description" placeholder='Description' className='w-full p-2 outline-none text-gray-800 text-md border-b mb-5' />

                <Editor
                    editorState={state.editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                    placeholder='Please Just Type :) ...'
                    editorStyle={{ height: "500px", paddingTop: "15px" }}

                />

                <button className='p-2 mt-3 hover:bg-gray-900 bg-gray-800 px-5 text-white'>Submit </button>
            </form>
        </Layout>
    )
}

export default New
