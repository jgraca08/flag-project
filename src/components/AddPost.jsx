import React, { useState } from "react";
import { useParams } from 'react-router-dom'

import Required from "../components/Required";
import SinglePost from "../components/SinglePost";

const AddPost = props => {

    const [valid, setValid] = useState(false);
    const [newPost, setNewPost] = useState(undefined);
    const [validations, setValidations] = useState([
        { input: 'nickname', valid: false },
        { input: 'info', valid: false },
    ]);

    var { category, turbo } = useParams();

    function checkForm() {
        setValid(validations.map(inp => inp.valid).reduce((resultado, valido) => resultado && valido))
    }

    function valRequired(el, state) {
        console.log(el,state);
        validations.forEach(inp => {
            if (inp.input === el)
                inp.valid = state;
        })
        checkForm();
    }

    function onSubmit(e) {
        e.preventDefault();
        const post = {
            name: e.target.nickname.value,
            post: e.target.info.value
        };
        

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        };
        fetch("https://62a0f7fb039c39cc8232a97d.mockapi.io/api/v1/categories/" + category + "/original/" + turbo + "/posts", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (!newPost)
                setNewPost(<SinglePost key={data.id} avatar={data.avatar} post={data.post} name={data.name}></SinglePost>)
            else
                setNewPost(<>{newPost}<SinglePost key={data.id} avatar={data.avatar} post={data.post} name={data.name}></SinglePost></>)
        }
        );
        e.target.reset();
    }

    return (
        <>
        <div className="container mb-5">
        {newPost}
        <form onSubmit={e => onSubmit(e)}> 
            <Required id="nickname" name="nickname" label="Name" onRequired={valRequired} pattern={/^[a-z-A-Z-0-9]{3,12}$/} error="Your nickname must have 3 - 12 characters" />
            <Required id="info" name="info" label="Your message" onRequired={valRequired} pattern={/^[a-z-A-Z-0-9 ]{10,100}$/} error="Your message must have 10 - 100 characters" />
            <button type="submit" className="btn btn-outline-danger rounded-0" disabled={!valid}>Add new post</button>
        </form>
        </div>
        </>
    )

}

export default AddPost; 