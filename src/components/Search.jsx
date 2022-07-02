import React from "react";

const Search = (props) => {

    return(
        <form className="d-flex" role="search">
            <input className="form-control me-2 border border-danger rounded-0" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-danger rounded-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
    )

}

export default Search;