import React from "react";
import { Link } from "react-router-dom";


const Favorites = (props) => {
    return(
        <div className="pe-4 ">
             <Link to={"/favorites"}><button className="btn btn-outline-danger rounded-0" type="submit"><i className="fa-solid fa-heart"></i></button></Link>
        </div>
    )
}

export default Favorites;