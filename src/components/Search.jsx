import React from "react";

const Search = (props) => {

    return(
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            
            <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
    )

}

export default Search;