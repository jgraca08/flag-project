import React from "react";
import './SinglePost.css';

const SinglePost = (props) => {
  return (  
    <div className="card mt-2 mb-5">
      <div className="card-header ">
        <img
          src={props.avatar}
          className="img-fluid rounded-circle avatar"
          alt="..."
        />
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className="fs-6">{props.post}</p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{props.name}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default SinglePost;
