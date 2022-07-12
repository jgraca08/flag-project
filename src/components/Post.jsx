import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import SinglePost from "./SinglePost";
import Spiner from "./Spiner";

const Post = props => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    var { category, turbo } = useParams();

    useEffect(() => {
        fetch("https://62a0f7fb039c39cc8232a97d.mockapi.io/api/v1/categories/" + category + "/original/" + turbo + "/posts?sortBy=createdAt&order=desc")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    //console.log(data);
                    setPosts(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Spiner></Spiner>;
    } else {
        return (
            <>
            <div className="container mt-5">
            <h4>Share your opinion about this product</h4>
                {posts.map(post => (
                    <SinglePost key={post.id} avatar={post.avatar} post={post.post} name={post.name}></SinglePost>
                ))}
                </div>
            </>
        );
    }

}

export default Post  